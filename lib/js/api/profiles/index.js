"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _read = require("./read.js");
Object.keys(_read).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _read[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _read[key];
    }
  });
});
var _update = require("./update.js");
Object.keys(_update).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _update[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _update[key];
    }
  });
});
var _delete = require("./delete.js");
Object.keys(_delete).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _delete[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _delete[key];
    }
  });
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