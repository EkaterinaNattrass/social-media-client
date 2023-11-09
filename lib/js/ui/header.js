"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.header = header;
var _index = require("../listeners/auth/index.js");
function header() {
  document.querySelectorAll('[data-auth=logout]').forEach(e => e.addEventListener('click', _index.logoutListener));
}