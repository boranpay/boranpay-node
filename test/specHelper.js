'use strict';

const chai = require('chai');
const dirtyChai = require('dirty-chai');
//global.paypal = require('../lib/lib');

chai.use(dirtyChai);

chai.config.includeStack = true;

global.assert = chai.assert;
global.expect = chai.expect;