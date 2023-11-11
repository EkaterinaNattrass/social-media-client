'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.save = void 0;
require('core-js/modules/es.json.stringify.js');
const save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
exports.save = save;
