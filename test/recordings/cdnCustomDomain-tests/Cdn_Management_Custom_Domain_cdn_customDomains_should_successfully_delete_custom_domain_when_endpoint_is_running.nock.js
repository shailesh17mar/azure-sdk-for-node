// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup2543/providers/Microsoft.Cdn/profiles/cdnTestProfile9208/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/start?api-version=2016-10-02')
  .reply(202, "{\r\n  \"hostName\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Starting\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"customDomains\":[\r\n    {\r\n      \"name\":\"cdnTestCustomDomain5936\",\"properties\":{\r\n        \"hostName\":\"sdk-1-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge-test.net\",\"validationData\":null\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '757',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2543/providers/Microsoft.Cdn/operationresults/296574cf-302a-4d94-8e29-c7e87aba4399/profileresults/cdnTestProfile9208/endpointresults/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': 'abf9cc8b-342b-4e14-8f4a-dec4ea2e1b6a',
  'x-ms-client-request-id': '3ecb9eaf-a662-4428-9381-3b46875ae92a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2543/providers/Microsoft.Cdn/operationresults/296574cf-302a-4d94-8e29-c7e87aba4399?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c0b21ab2-8d38-4f4b-80cf-1fceed88c372',
  'x-ms-routing-request-id': 'WESTUS2:20161028T022121Z:c0b21ab2-8d38-4f4b-80cf-1fceed88c372',
  date: 'Fri, 28 Oct 2016 02:21:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup2543/providers/Microsoft.Cdn/profiles/cdnTestProfile9208/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/start?api-version=2016-10-02')
  .reply(202, "{\r\n  \"hostName\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Starting\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"customDomains\":[\r\n    {\r\n      \"name\":\"cdnTestCustomDomain5936\",\"properties\":{\r\n        \"hostName\":\"sdk-1-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge-test.net\",\"validationData\":null\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '757',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2543/providers/Microsoft.Cdn/operationresults/296574cf-302a-4d94-8e29-c7e87aba4399/profileresults/cdnTestProfile9208/endpointresults/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': 'abf9cc8b-342b-4e14-8f4a-dec4ea2e1b6a',
  'x-ms-client-request-id': '3ecb9eaf-a662-4428-9381-3b46875ae92a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2543/providers/Microsoft.Cdn/operationresults/296574cf-302a-4d94-8e29-c7e87aba4399?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c0b21ab2-8d38-4f4b-80cf-1fceed88c372',
  'x-ms-routing-request-id': 'WESTUS2:20161028T022121Z:c0b21ab2-8d38-4f4b-80cf-1fceed88c372',
  date: 'Fri, 28 Oct 2016 02:21:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2543/providers/Microsoft.Cdn/operationresults/296574cf-302a-4d94-8e29-c7e87aba4399?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '5d69e36d-81d6-4451-8612-01707e5b0304',
  'x-ms-client-request-id': '5773a858-bff9-4359-a5c4-0989c894d18b',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '6988178c-6aa9-47a2-acd6-5769072f31f5',
  'x-ms-routing-request-id': 'CENTRALUS:20161028T022152Z:6988178c-6aa9-47a2-acd6-5769072f31f5',
  date: 'Fri, 28 Oct 2016 02:21:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2543/providers/Microsoft.Cdn/operationresults/296574cf-302a-4d94-8e29-c7e87aba4399?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '5d69e36d-81d6-4451-8612-01707e5b0304',
  'x-ms-client-request-id': '5773a858-bff9-4359-a5c4-0989c894d18b',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '6988178c-6aa9-47a2-acd6-5769072f31f5',
  'x-ms-routing-request-id': 'CENTRALUS:20161028T022152Z:6988178c-6aa9-47a2-acd6-5769072f31f5',
  date: 'Fri, 28 Oct 2016 02:21:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup2543/providers/Microsoft.Cdn/profiles/cdnTestProfile9208/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains/cdnTestCustomDomain5936?api-version=2016-10-02')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2543/providers/Microsoft.Cdn/operationresults/07b9471b-be1e-4ef8-a3d8-45889c6fbccb/profileresults/cdnTestProfile9208/endpointresults/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customdomainresults/cdnTestCustomDomain5936?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': 'd1a1aabd-6fc2-4018-bd9a-bc144a4fa8a9',
  'x-ms-client-request-id': '05c0d280-fb63-4a49-86ca-4f57d8cb612d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2543/providers/Microsoft.Cdn/operationresults/07b9471b-be1e-4ef8-a3d8-45889c6fbccb?api-version=2016-10-02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ec12e16a-e198-4b2b-9deb-3966140dc48c',
  'x-ms-routing-request-id': 'CENTRALUS:20161028T022153Z:ec12e16a-e198-4b2b-9deb-3966140dc48c',
  date: 'Fri, 28 Oct 2016 02:21:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup2543/providers/Microsoft.Cdn/profiles/cdnTestProfile9208/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains/cdnTestCustomDomain5936?api-version=2016-10-02')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2543/providers/Microsoft.Cdn/operationresults/07b9471b-be1e-4ef8-a3d8-45889c6fbccb/profileresults/cdnTestProfile9208/endpointresults/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customdomainresults/cdnTestCustomDomain5936?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': 'd1a1aabd-6fc2-4018-bd9a-bc144a4fa8a9',
  'x-ms-client-request-id': '05c0d280-fb63-4a49-86ca-4f57d8cb612d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2543/providers/Microsoft.Cdn/operationresults/07b9471b-be1e-4ef8-a3d8-45889c6fbccb?api-version=2016-10-02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ec12e16a-e198-4b2b-9deb-3966140dc48c',
  'x-ms-routing-request-id': 'CENTRALUS:20161028T022153Z:ec12e16a-e198-4b2b-9deb-3966140dc48c',
  date: 'Fri, 28 Oct 2016 02:21:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2543/providers/Microsoft.Cdn/operationresults/07b9471b-be1e-4ef8-a3d8-45889c6fbccb?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'f5334532-e6e1-4a37-8d69-b8853423032f',
  'x-ms-client-request-id': 'fb1fc316-3d1f-41a0-86ba-d66689e23e4f',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '1cf19606-f3a9-4866-aa69-0dfa50640b8b',
  'x-ms-routing-request-id': 'CENTRALUS:20161028T022224Z:1cf19606-f3a9-4866-aa69-0dfa50640b8b',
  date: 'Fri, 28 Oct 2016 02:22:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2543/providers/Microsoft.Cdn/operationresults/07b9471b-be1e-4ef8-a3d8-45889c6fbccb?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'f5334532-e6e1-4a37-8d69-b8853423032f',
  'x-ms-client-request-id': 'fb1fc316-3d1f-41a0-86ba-d66689e23e4f',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '1cf19606-f3a9-4866-aa69-0dfa50640b8b',
  'x-ms-routing-request-id': 'CENTRALUS:20161028T022224Z:1cf19606-f3a9-4866-aa69-0dfa50640b8b',
  date: 'Fri, 28 Oct 2016 02:22:24 GMT',
  connection: 'close' });
 return result; }]];