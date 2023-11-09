"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProfile = deleteProfile;
require("core-js/modules/es.promise.js");
var _constants = require("../constants.js");
var _headers = require("../headers.js");
async function deleteProfile(name) {
  const response = await fetch("".concat(_constants.apiPath, "/social/profiles/").concat(name), {
    method: 'delete',
    headers: (0, _headers.headers)()
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}