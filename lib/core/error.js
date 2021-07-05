const util = require('util');

// eslint-disable-next-line no-multi-assign
const TwocheckoutError = module.exports = (code, message) => {
  this.name = 'BoranpayError';
  this.code = code;
  this.message = message;
};

util.inherits(TwocheckoutError, Error);
