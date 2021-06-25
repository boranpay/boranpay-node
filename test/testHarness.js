
'use strict';

const boranpay = require('../lib/lib').core;

const client = () => {
    // return new boranpay.PayPalHttpClient(environment());
}

const environment = () => {
    let clientId = process.env.BORANPAY_CLIENT_ID || '<<BORANPAY-CLIENT-ID>>';
    let clientSecret = process.env.BORANPAY_CLIENT_SECRET || '<<BORANPAY-CLIENT-KEY>>';

    return new boranpay.BoranPayEnvironment(
        clientId, clientSecret
    );
}

module.exports = {
    client: client,
    environment: environment
};