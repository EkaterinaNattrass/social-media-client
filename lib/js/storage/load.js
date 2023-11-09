"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = void 0;
const load = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (_unused) {
    return null;
  }
};
exports.load = load;