"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _follow = require("./follow.js");
Object.keys(_follow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _follow[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _follow[key];
    }
  });
});
var _unfollow = require("./unfollow.js");
Object.keys(_unfollow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _unfollow[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _unfollow[key];
    }
  });
});