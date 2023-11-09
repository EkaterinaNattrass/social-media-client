"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateLoginVisibility = updateLoginVisibility;
var _index = require("../storage/index.js");
function updateLoginVisibility() {
  const token = (0, _index.load)('token');
  document.body.classList[token ? 'add' : 'remove']('logged-in');
}