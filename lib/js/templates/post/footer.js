"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postFooter = postFooter;
require("core-js/modules/web.dom-collections.iterator.js");
var _instance = require("../instance.js");
function postFooter() {
  const clone = (0, _instance.templateInstance)('postFooter');
  clone.querySelector('.card-footer').append(...arguments);
  return clone;
}