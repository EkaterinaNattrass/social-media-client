'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
var _postList = require('./postList.js');
Object.keys(_postList).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _postList[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _postList[key];
    },
  });
});
var _postPage = require('./postPage.js');
Object.keys(_postPage).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _postPage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _postPage[key];
    },
  });
});
var _profileList = require('./profileList.js');
Object.keys(_profileList).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _profileList[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _profileList[key];
    },
  });
});
var _profilePage = require('./profilePage.js');
Object.keys(_profilePage).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _profilePage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _profilePage[key];
    },
  });
});
