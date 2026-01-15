'use strict';

module.exports = web;

const core = require("core")

console.log(core())

function web() {
  return 'Hello from web';
}

console.log('THIS IS A LOG AGAIN')
