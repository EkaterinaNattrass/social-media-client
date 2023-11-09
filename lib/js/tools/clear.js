"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
function clear(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}