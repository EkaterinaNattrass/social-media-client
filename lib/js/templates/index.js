'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
var _index = require('./post/index.js');
Object.keys(_index).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    },
  });
});
var _instance = require('./instance.js');
Object.keys(_instance).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _instance[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _instance[key];
    },
  });
});
var _index2 = require('./profile/index.js');
Object.keys(_index2).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _index2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index2[key];
    },
  });
});
var _index3 = require('./comment/index.js');
Object.keys(_index3).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _index3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index3[key];
    },
  });
});
