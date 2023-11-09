"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reactionTemplate = exports.reactionOptionTemplate = exports.postReactionMenu = void 0;
require("core-js/modules/es.array.sort.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _instance = require("../instance.js");
var _index = require("../../tools/index.js");
var _index2 = require("../../listeners/index.js");
const postReactionMenu = post => {
  const clone = (0, _instance.templateInstance)('reactionMenu');
  if (post.reactions && post.reactions.length) {
    const sortedReactions = post.reactions.sort((a, b) => {
      return b.count - a.count;
    }).map(reaction => reactionTemplate(reaction));
    clone.querySelector('.reactions').prepend(...sortedReactions);
  }
  const emojis = (0, _index.emojiSubset)(post.reactions);
  clone.querySelector('.dropdown-menu').append(...emojis.map(emoji => reactionOptionTemplate(emoji, post.id)));
  const reactions = clone.querySelectorAll('[data-reaction]');
  reactions.forEach(reaction => {
    reaction.addEventListener('click', _index2.reactionListener);
  });
  return clone;
};
exports.postReactionMenu = postReactionMenu;
const reactionTemplate = _ref => {
  let {
    symbol,
    count,
    postId
  } = _ref;
  const clone = (0, _instance.templateInstance)('reactionButton');
  clone.querySelector('.btn').dataset.symbol = symbol;
  clone.querySelector('.btn').prepend("".concat(symbol));
  clone.querySelector('.badge').innerText = count;
  clone.querySelector('.btn').dataset.postId = postId;
  return clone;
};
exports.reactionTemplate = reactionTemplate;
const reactionOptionTemplate = (symbol, postId) => {
  const clone = (0, _instance.templateInstance)('reactionOption');
  clone.querySelector('.dropdown-item').dataset.symbol = symbol;
  clone.querySelector('.dropdown-item').dataset.postId = postId;
  clone.querySelector('.dropdown-item').innerText = symbol;
  return clone;
};
exports.reactionOptionTemplate = reactionOptionTemplate;