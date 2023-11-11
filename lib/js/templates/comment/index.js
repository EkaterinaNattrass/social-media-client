'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
var _comment = require('./comment.js');
Object.keys(_comment).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _comment[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _comment[key];
    },
  });
});
var _form = require('./form.js');
Object.keys(_form).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _form[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _form[key];
    },
  });
});
