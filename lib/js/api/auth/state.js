"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profile = exports.isLoggedIn = void 0;
var _index = require("../../storage/index.js");
const isLoggedIn = () => Boolean((0, _index.load)('token'));
exports.isLoggedIn = isLoggedIn;
const profile = () => (0, _index.load)('profile');
exports.profile = profile;