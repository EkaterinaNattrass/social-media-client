'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.postPageTemplate = void 0;
require('core-js/modules/web.dom-collections.iterator.js');
var _instance = require('../instance.js');
var _header = require('./header.js');
var _media = require('./media.js');
var _footer = require('./footer.js');
var _actions = require('./actions.js');
var _reactions = require('./reactions.js');
var _comments = require('./comments.js');
const postPageTemplate = (post) => {
  const clone = (0, _instance.templateInstance)('postPage');
  clone.querySelector('.post').id = post.id;
  const header = (0, _header.postHeader)(post);
  const media = (0, _media.postMedia)(post, 'div');
  const footer = (0, _footer.postFooter)(
    (0, _actions.postActions)(post),
    (0, _reactions.postReactionMenu)(post),
  );
  const comments = (0, _comments.postCommentsTemplate)(post);
  const children = [header, media, footer, comments];
  clone.querySelector('.page').append(...children);
  return clone;
};
exports.postPageTemplate = postPageTemplate;
