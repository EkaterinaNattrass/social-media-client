'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.apiUrl = exports.apiPath = void 0;
require('core-js/modules/web.dom-collections.iterator.js');
require('core-js/modules/web.url.js');
require('core-js/modules/web.url-search-params.js');
require('core-js/modules/es.regexp.to-string.js');
const apiUrl = (exports.apiUrl = new URL('https://nf-api.onrender.com/api/v1'));
const apiPath = (exports.apiPath = apiUrl.toString());
