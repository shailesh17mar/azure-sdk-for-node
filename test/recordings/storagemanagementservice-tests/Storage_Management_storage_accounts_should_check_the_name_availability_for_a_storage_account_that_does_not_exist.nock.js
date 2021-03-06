// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2aa30309-3723-4112-bd0b-79e9f65fc52d';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/providers/Microsoft.Storage/checkNameAvailability?api-version=2016-05-01', '*')
  .reply(200, "{\"nameAvailable\":true}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '3494d0e2-7dae-491f-9793-e633ed1ae24c',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '3494d0e2-7dae-491f-9793-e633ed1ae24c',
  'x-ms-routing-request-id': 'JAPANEAST:20161219T084111Z:3494d0e2-7dae-491f-9793-e633ed1ae24c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Dec 2016 08:41:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/providers/Microsoft.Storage/checkNameAvailability?api-version=2016-05-01', '*')
  .reply(200, "{\"nameAvailable\":true}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '3494d0e2-7dae-491f-9793-e633ed1ae24c',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '3494d0e2-7dae-491f-9793-e633ed1ae24c',
  'x-ms-routing-request-id': 'JAPANEAST:20161219T084111Z:3494d0e2-7dae-491f-9793-e633ed1ae24c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Dec 2016 08:41:10 GMT',
  connection: 'close' });
 return result; }]];