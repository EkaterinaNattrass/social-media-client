"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.followListener = followListener;
require("core-js/modules/es.promise.js");
var _index = require("../../api/profiles/index.js");
async function followListener(event) {
  const button = event.srcElement;
  const name = button.dataset.name;
  if (name) {
    try {
      await (0, _index.followProfile)(name);
      location.reload();
    } catch (_unused) {
      return alert('There was a problem following this profile');
    }
  }
}