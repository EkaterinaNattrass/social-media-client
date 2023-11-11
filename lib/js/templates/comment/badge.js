'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.commentsBadgeTemplate = void 0;
var _instance = require('../instance.js');
const commentsBadgeTemplate = (comments) => {
  if (comments && comments.length) {
    const clone = (0, _instance.templateInstance)('commentsTag');
    clone.querySelector('.badge').innerText = ''
      .concat(comments.length, ' comment')
      .concat(comments.length > 1 ? 's' : '');
    return clone;
  }
  return '\r\n';
};
exports.commentsBadgeTemplate = commentsBadgeTemplate;
