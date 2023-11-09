"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentFormTemplate = void 0;
var _index = require("../../listeners/index.js");
var _instance = require("../instance.js");
const commentFormTemplate = postId => {
  const clone = (0, _instance.templateInstance)('commentForm');
  clone.querySelector('form').dataset.postId = postId;
  clone.querySelector('form').addEventListener('submit', _index.commentListener);
  return clone;
};
exports.commentFormTemplate = commentFormTemplate;