"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProfile = getProfile;
exports.getProfiles = getProfiles;
require("core-js/modules/es.promise.js");
var _constants = require("../constants.js");
var _headers = require("../headers.js");
async function getProfiles() {
  const response = await fetch("".concat(_constants.apiPath, "/social/profiles"), {
    headers: (0, _headers.headers)()
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}
async function getProfile(name) {
  const response = await fetch("".concat(_constants.apiPath, "/social/profiles/").concat(name, "?&_followers=true&_posts=true&_following=true"), {
    headers: (0, _headers.headers)()
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}