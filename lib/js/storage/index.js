'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
var _load = require('./load.js');
Object.keys(_load).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _load[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _load[key];
    },
  });
});
var _remove = require('./remove.js');
Object.keys(_remove).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _remove[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _remove[key];
    },
  });
});
var _save = require('./save.js');
Object.keys(_save).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _save[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _save[key];
    },
  });
});
