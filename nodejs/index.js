let request = require('request');

// Get variables needed from environment variables
require('dotenv').config();
let apiKey = process.env.APIKEY;
let appId = process.env.APPID;
let region = process.env.REGION;
let orgId = process.env.ORGID;

// Function calls to different usage api
overallCustomerCount();
usagePerCustomerWithinRegion();
individualCustomerSubscription();


function overallCustomerCount() {
    let options = {
        'method': 'GET',
        'url': 'https://billable-vendor-usage-api.usw2.pure.cloud/v1/regions?appIds=' + appId,
        'headers': {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        }
    };
    request(options, function (error, response) { 
        if (error) throw new Error(error);
        console.log(response.body);
    });
}

function usagePerCustomerWithinRegion() {
    let options = {
        'method': 'GET',
        'url': 'https://billable-vendor-usage-api.usw2.pure.cloud/v1/regions/' + region + '/organizations?appIds=' + appId,
        'headers': {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        }
    };
    request(options, function (error, response) { 
        if (error) throw new Error(error);
        console.log(response.body);
    });
}

function individualCustomerSubscription() {
    let options = {
        'method': 'GET',
        'url': 'https://billable-vendor-usage-api.usw2.pure.cloud/v1/regions/' + region + '/organizations/' + orgId + '?appIds=' + appId,
        'headers': {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        }
    };
    request(options, function (error, response) { 
        if (error) throw new Error(error);
        console.log(response.body);
    });
}