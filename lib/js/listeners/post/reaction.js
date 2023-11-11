'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.reactionListener = reactionListener;
require('core-js/modules/es.promise.js');
var _index = require('../../api/posts/index.js');
async function reactionListener(event) {
  const button = event.srcElement;
  const symbol = button.dataset.symbol;
  const postId = button.dataset.postId;
  if (postId && symbol) {
    try {
      await (0, _index.react)(postId, symbol);
      location.reload();
    } catch (_unused) {
      return alert('There was a problem reacting to this post');
    }
  }
}
