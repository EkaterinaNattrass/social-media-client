"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modals = void 0;
var _index = require("../listeners/index.js");
const modals = () => {
  document.querySelector('form#loginForm').addEventListener('submit', _index.loginListener);
  document.querySelector('form#registerForm').addEventListener('submit', _index.registerListener);
};
exports.modals = modals;