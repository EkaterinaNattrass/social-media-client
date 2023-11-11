'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _header = require('./header.js');
var _auth = require('./auth.js');
var _modals = require('./modals.js');
var _footer = require('./footer.js');
var _default = () => {
  (0, _header.header)();
  (0, _modals.modals)();
  (0, _footer.footer)();
  (0, _auth.updateLoginVisibility)();
};
exports.default = _default;
