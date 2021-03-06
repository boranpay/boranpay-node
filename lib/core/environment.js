// const SANDBOX = 'https://api.sandbox.paypal.com';
// const LIVE = 'https://api.paypal.com';
// const SANDBOX_WEB_URL = 'https://www.sandbox.paypal.com';
// const LIVE_WEB_URL = 'https://www.paypal.com';
const paypalhttp = require('@paypal/paypalhttp');

const SANDBOX = '';
const LIVE = '';
const SANDBOX_WEB_URL = '';
const LIVE_WEB_URL = '';
/**
 * Base class for PayPal Environments
 */
class BoranPayEnvironment extends paypalhttp.Environment {
  /**
   * @param {string} clientId - The client id for this environment
   * @param {string} clientSecret - The client secret
   * @param {string} baseUrl - The base url to execute requests
   * @param {string} webUrl - The web url to authorize user's consent
   */
  constructor(clientId, clientSecret, baseUrl, webUrl) {
    super(baseUrl);
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.webUrl = webUrl;
  }

  /**
   * Authorization header string for basic authentication with the current client id and secret
   * @return {string} - The authorization header value
   */
  authorizationString() {
    const encoded = new Buffer(`${this.clientId}:${this.clientSecret}`).toString('base64');

    return `Basic ${encoded}`;
  }
}

/**
 * Live Environment
 */
class LiveEnvironment extends BoranPayEnvironment {
  constructor(clientId, clientSecret) {
    super(clientId, clientSecret, LIVE, LIVE_WEB_URL);
  }
}

module.exports = {
  BoranPayEnvironment,
  LiveEnvironment,
};
