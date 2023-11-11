'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.logout = logout;
var _index = require('../../storage/index.js');
function logout() {
  (0, _index.remove)('token');
  (0, _index.remove)('profile');
}
