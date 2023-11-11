'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.postTags = void 0;
require('core-js/modules/web.dom-collections.iterator.js');
var _instance = require('../instance.js');
const postTags = (post) => {
  if (post.tags) {
    const element = document.createElement('span');
    element.classList.add('post-tags');
    const tags = post.tags.map((tag) => {
      const clone = (0, _instance.templateInstance)('postTag');
      clone.querySelector('.badge').innerText = tag;
      return clone;
    });
    element.append(...tags);
    return element;
  }
  return '\r\n';
};
exports.postTags = postTags;
