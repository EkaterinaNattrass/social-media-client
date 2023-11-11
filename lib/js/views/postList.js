'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.postList = void 0;
require('core-js/modules/web.dom-collections.iterator.js');
var _index = require('../templates/index.js');
const postList = (exports.postList = function postList(posts) {
  let preview =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const element = document.createElement('div');
  element.classList.add('post', 'list');
  element.append(
    ...posts.map((post) => (0, _index.postThumbnailTemplate)(post, preview)),
  );
  return element;
});
