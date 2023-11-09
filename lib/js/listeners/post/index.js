"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _reaction = require("./reaction.js");
Object.keys(_reaction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _reaction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reaction[key];
    }
  });
});
var _comment = require("./comment.js");
Object.keys(_comment).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _comment[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _comment[key];
    }
  });
});