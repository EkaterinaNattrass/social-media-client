"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profilePage = void 0;
require("core-js/modules/es.promise.js");
var _index = require("../api/index.js");
var _read = require("../api/profiles/read.js");
var _index2 = require("../templates/index.js");
const profilePage = async name => {
  if (!(0, _index.isLoggedIn)()) {
    location.href = './';
  } else {
    return (0, _index2.profilePageTemplate)(await (0, _read.getProfile)(name));
  }
};
exports.profilePage = profilePage;