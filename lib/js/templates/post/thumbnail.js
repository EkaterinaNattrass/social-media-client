'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.postThumbnailTemplate = void 0;
require('core-js/modules/web.dom-collections.iterator.js');
var _instance = require('../instance.js');
var _header = require('./header.js');
var _media = require('./media.js');
var _footer = require('./footer.js');
var _reactions = require('./reactions.js');
var _actions = require('./actions.js');
const postThumbnailTemplate = (exports.postThumbnailTemplate =
  function postThumbnailTemplate(post) {
    let preview =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const clone = (0, _instance.templateInstance)('postThumbnail');
    clone.querySelector('.post').id = post.id;
    const header = (0, _header.postHeader)(post);
    const media = (0, _media.postMedia)(post, preview ? 'div' : 'a');
    const footer = (0, _footer.postFooter)(
      (0, _actions.postActions)(post),
      (0, _reactions.postReactionMenu)(post),
    );
    const children = [header, media, footer];
    clone.querySelector('.thumbnail').append(...children);
    return clone;
  });
