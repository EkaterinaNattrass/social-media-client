"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentListener = commentListener;
require("core-js/modules/es.promise.js");
var _index = require("../../api/index.js");
var _searchParams = require("../../router/searchParams.js");
async function commentListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const body = data.get('body');
  const postId = form.dataset.postId;
  const replyToId = (0, _searchParams.getSearchParams)().replyToId;
  try {
    await (0, _index.comment)(postId, body, replyToId);
  } catch (_unused) {
    return alert('There was a problem posting your comment');
  }
  form.remove();
  location.reload();
}