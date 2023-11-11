'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.url = exports.apiBase = void 0;
require('core-js/modules/web.dom-collections.iterator.js');
require('core-js/modules/web.url.js');
require('core-js/modules/web.url-search-params.js');
const apiBase = (exports.apiBase = 'https://whatver.com/api/posts');
const url = (exports.url = new URL(apiBase));
