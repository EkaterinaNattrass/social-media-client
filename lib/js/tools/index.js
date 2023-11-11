'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
var _clear = require('./clear.js');
Object.keys(_clear).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _clear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _clear[key];
    },
  });
});
var _emojiSubset = require('./emojiSubset.js');
Object.keys(_emojiSubset).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _emojiSubset[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _emojiSubset[key];
    },
  });
});
