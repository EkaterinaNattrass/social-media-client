"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.react = react;
require("core-js/modules/es.promise.js");
var _constants = require("../constants.js");
var _headers = require("../headers.js");
async function react(postId, symbol) {
  const response = await fetch("".concat(_constants.apiPath, "/social/posts/").concat(postId, "/react/").concat(symbol), {
    headers: (0, _headers.headers)(),
    method: 'put'
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}