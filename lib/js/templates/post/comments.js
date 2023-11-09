"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postCommentsTemplate = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _index = require("../comment/index.js");
const postCommentsTemplate = post => {
  const element = document.createElement('div');
  element.classList.add('post-comments');
  if (post && post.comments) {
    const comments = post.comments.map(comment => (0, _index.commentTemplate)(comment, post.author.name));
    element.append(...comments);
  }
  element.append((0, _index.commentFormTemplate)(post.id));
  return element;
};
exports.postCommentsTemplate = postCommentsTemplate;