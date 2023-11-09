"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.followProfile = followProfile;
require("core-js/modules/es.promise.js");
var _constants = require("../constants.js");
var _headers = require("../headers.js");
async function followProfile(name) {
  const response = await fetch("".concat(_constants.apiPath, "/social/profiles/").concat(name, "/follow"), {
    headers: (0, _headers.headers)(),
    method: 'put'
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}