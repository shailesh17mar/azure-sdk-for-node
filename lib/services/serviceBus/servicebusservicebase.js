/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// Module dependencies.
var util = require('util');
var url = require('url');

var ServiceClient = require('../core/serviceclient');
var ServiceBusServiceClient = require('../core/servicebusserviceclient');

var WebResource = require('../../http/webresource');
var Constants = require('../../util/constants');
var QueryStringConstants = Constants.QueryStringConstants;
var HttpConstants = Constants.HttpConstants;
var HeaderConstants = Constants.HeaderConstants;

var ServiceBusSettings = require('../core/servicebussettings');

/**
* Creates a new ServiceBusServiceBase object.
*
* @constructor
* @augments {ServiceClient}
*
* @param {string} [namespaceOrConnectionString]  The service bus namespace or the connection string.
* @param {string} [accessKey]                    The password. Only necessary if no connection string passed.
* @param {string} [issuer]                       The issuer.
* @param {string} [acsNamespace]                 The acs namespace. Usually the same as the sb namespace with "-sb" suffix.
* @param {string} [host]                         The host address.
* @param {object} [authenticationProvider]       The authentication provider.
*/
function ServiceBusServiceBase(namespaceOrConnectionString, accessKey, issuer, acsNamespace, host, authenticationProvider) {
  var serviceBusSettings;
  if (namespaceOrConnectionString && !accessKey) {
    // If namespaceOrConnectionString was passed and no accessKey was passed, assume connection string
    serviceBusSettings = ServiceBusSettings.createFromConnectionString(namespaceOrConnectionString);
  } else {
    if (!namespaceOrConnectionString) {
      namespaceOrConnectionString = process.env[ServiceClient.EnvironmentVariables.AZURE_SERVICEBUS_NAMESPACE];
    }

    if (!accessKey) {
      accessKey = process.env[ServiceClient.EnvironmentVariables.AZURE_SERVICEBUS_ACCESS_KEY];
    }

    if (!issuer) {
      issuer = process.env[ServiceClient.EnvironmentVariables.AZURE_SERVICEBUS_ISSUER];

      if (!issuer) {
        issuer = ServiceClient.DEFAULT_SERVICEBUS_ISSUER;
      }
    }

    if (!acsNamespace) {
      acsNamespace = process.env[ServiceClient.EnvironmentVariables.AZURE_WRAP_NAMESPACE];

      if (!acsNamespace) {
        acsNamespace = namespaceOrConnectionString + ServiceClient.DEFAULT_WRAP_NAMESPACE_SUFFIX;
      }
    }

    var endpoint = url.format({ protocol: 'https:', port: 443, hostname: namespaceOrConnectionString + '.' + ServiceClient.CLOUD_SERVICEBUS_HOST });
    var stsendpoint = url.format({ protocol: 'https:', port: 443, hostname: acsNamespace + '.' + ServiceClient.CLOUD_ACCESS_CONTROL_HOST });

    if (host) {
      endpoint = url.format(ServiceClient._parseHost(host));
    }

    var settings = {
      endpoint: endpoint,
      sharedsecretissuer: issuer,
      sharedsecretvalue: accessKey,
      stsendpoint: stsendpoint
    };

    serviceBusSettings = ServiceBusSettings.createFromSettings(settings);
  }

  ServiceBusServiceBase['super_'].call(this,
    serviceBusSettings._wrapPassword,
    serviceBusSettings._wrapName,
    serviceBusSettings._serviceBusEndpointUri,
    serviceBusSettings._wrapEndpointUri,
    authenticationProvider);

  this.xml2jsSettings.ignoreAttrs = true;
}

util.inherits(ServiceBusServiceBase, ServiceBusServiceClient);

/**
* Validates a callback function.
*
* @param (function) callback The callback function.
* @return {undefined}
*/
function validateCallback(callback) {
  if (!callback) {
    throw new Error('Callback must be specified.');
  }
}

/**
* Creates a resource.
*
* @param {string}             path                                                The resource path.
* @param {object}             handler                                             The resource handler.
* @param {object|function}    [optionsOrCallback]                                 The request options or callback function.
* @param {function(error, response)} callback                                     The callback function.
* @return {undefined}
*/
ServiceBusServiceBase.prototype._createResource = function (path, handler, optionsOrCallback, callback) {
  var options = null;
  if (typeof optionsOrCallback === 'function' && !callback) {
    callback = optionsOrCallback;
  } else {
    options = optionsOrCallback;
  }

  validateCallback(callback);

  var resource = handler.serialize(options);

  var webResource = WebResource.put(path);
  webResource.addOptionalHeader(HeaderConstants.CONTENT_TYPE, 'application/atom+xml;type=entry;charset=utf-8');
  webResource.addOptionalHeader(HeaderConstants.CONTENT_LENGTH, Buffer.byteLength(resource, 'utf8'));

  var processResponseCallback = function (responseObject, next) {
    if (!responseObject.error) {
      responseObject.result = handler.parse(responseObject.response.body);
    }

    var finalCallback = function (returnObject) {
      callback(returnObject.error, returnObject.result, returnObject.response);
    };

    next(responseObject, finalCallback);
  };

  this.performRequest(webResource, resource, options, processResponseCallback);
};

/**
* Retrieves a resource.
*
* @param {string}             path                                                A string object that represents the resource name.
* @param {object}             handler                                             The resource handler.
* @param {function(error, resource, response)} callback                           The callback function.
* @return {undefined}
*/
ServiceBusServiceBase.prototype._getResource = function (path, handler, validators, callback) {
  validateCallback(callback);

  var webResource = WebResource.get(path);

  var processResponseCallback = function (responseObject, next) {
    if (!responseObject.error && (!validators || !validators.some(function (v) { return !v(responseObject); }))) {
      responseObject.result = handler.parse(responseObject.response.body);
    }

    var finalCallback = function (returnObject) {
      callback(returnObject.error, returnObject.result, returnObject.response);
    };

    next(responseObject, finalCallback);
  };

  this.performRequest(webResource, null, null, processResponseCallback);
};

/**
* Returns a list of resources.
*
* @param {string}             path                                                A string object that represents the resource name.
* @param {object}             handler                                             The resource handler.
* @param {object|function}    [optionsOrCallback]                                 The request options or callback function.
* @param {int}                [optionsOrCallback.top]                             The number of topics to fetch.
* @param {int}                [optionsOrCallback.skip]                            The number of topics to skip.
* @param {function(error, resources, response)} callback                          The callback function.
* @return {undefined}
*/
ServiceBusServiceBase.prototype._listResources = function (path, handler, validators, optionsOrCallback, callback) {
  var options = null;
  if (typeof optionsOrCallback === 'function' && !callback) {
    callback = optionsOrCallback;
  } else {
    options = optionsOrCallback;
  }

  validateCallback(callback);

  var webResource = WebResource.get(path);

  if (options) {
    webResource.addOptionalQueryParam(QueryStringConstants.TOP, options.top);
    webResource.addOptionalQueryParam(QueryStringConstants.SKIP, options.skip);
  }

  var processResponseCallback = function (responseObject, next) {
    responseObject.result = null;

    if (!responseObject.error && (!validators || !validators.some(function (v) { return !v(responseObject); }))) {
      responseObject.result = handler.parse(responseObject.response.body);
    }

    var finalCallback = function (returnObject) {
      callback(returnObject.error, returnObject.result, returnObject.response);
    };

    next(responseObject, finalCallback);
  };

  this.performRequest(webResource, null, null, processResponseCallback);
};

/**
* Deletes a resource.
*
* @param {string}             path                                                The resource path.
* @param {function(error, response)} callback                                     The callback function.
* @return {undefined}
*/
ServiceBusServiceBase.prototype._deleteResource = function (path, callback) {
  validateCallback(callback);

  var webResource = WebResource.del(path)
    .withOkCode(HttpConstants.HttpResponseCodes.OK_CODE);

  var processResponseCallback = function (responseObject, next) {
    var finalCallback = function (returnObject) {
      callback(returnObject.error, returnObject.response);
    };

    next(responseObject, finalCallback);
  };

  this.performRequest(webResource, null, null, processResponseCallback);
};

module.exports = ServiceBusServiceBase;