"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderView = renderView;
require("core-js/modules/web.dom-collections.iterator.js");
var _index = require("../tools/index.js");
function renderView() {
  const main = document.querySelector('main');
  (0, _index.clear)(main);
  main.append(...arguments);
}