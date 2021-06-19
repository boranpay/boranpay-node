# BoranPay Node.js Library


The BoranPay Node library provides convenient access to the Stripe API from
applications written in server-side JavaScript.

## Requirements

Node 8, 10 or higher.

## Installation

Install the package with:

```sh
npm install boranpay --save
# or
yarn add boranpay
```

## Usage

The package needs to be configured with your account's secret key, which is
available in the [BoranPay Dashboard](https://www.boranpay.com/developpeur/app/). Require it with the key's
value:

<!-- prettier-ignore -->
```js
const boranpay = require('boranpay');
```