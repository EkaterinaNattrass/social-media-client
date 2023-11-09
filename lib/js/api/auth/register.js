"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
require("core-js/modules/es.promise.js");
require("core-js/modules/es.json.stringify.js");
var _constants = require("../constants.js");
var _headers = require("../headers.js");
async function register(name, email, password, avatar) {
  const response = await fetch("".concat(_constants.apiPath, "/social/auth/register"), {
    method: 'post',
    body: JSON.stringify({
      name,
      email,
      password,
      avatar
    }),
    headers: (0, _headers.headers)('application/json')
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}