const got = require('got');
const BoranpayError = require('./error');

exports.execute = (args, callback) => {
  const options = {
    method: args.method,
    responseType: 'json',
    prefixUrl: 'https://www.boranpay.com',
  };

  if (args.type === 'admin') {
    options.username = args.apiUser;
    options.password = args.apiPass;

    if (args.method === 'POST') {
      options.form = args.payload;
    } else {
      options.searchParams = args.payload;
    }
  } else {
    // eslint-disable-next-line no-param-reassign
    args.payload.privateKey = args.privateKey;
    // eslint-disable-next-line no-param-reassign
    args.payload.sellerId = args.sellerId;
    options.body = JSON.stringify(args.payload);
  }

  const path = (args.path.charAt(0) === '/') ? args.path.substr(1) : args.path;
  (async () => {
    try {
      const response = await got(path, options);
      callback(null, response.body);
    } catch (error) {
      const parsedResponse = typeof error.response !== 'undefined' ? error.response.body : null;
      if (parsedResponse) {
        if (args.type === 'admin') {
          if (parsedResponse.errors) {
            // eslint-disable-next-line max-len
            callback(new BoranpayError(parsedResponse.errors[0].code, parsedResponse.errors[0].message));
          }
        } else if (parsedResponse.exception) {
          // eslint-disable-next-line max-len
          callback(new BoranpayError(parsedResponse.exception.errorCode, parsedResponse.exception.errorMsg));
        }
      } else {
        callback(new BoranpayError('500', 'Error parsing JSON response from 2Checkout API.'));
      }
    }
  })();
};
