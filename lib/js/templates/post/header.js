"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postHeader = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _badge = require("../comment/badge.js");
var _instance = require("../instance.js");
var _thumbnail = require("../profile/thumbnail.js");
var _tags = require("./tags.js");
const postHeader = post => {
  const clone = (0, _instance.templateInstance)('postHeader');
  clone.querySelector('.card-header').href = "./?view=post&postId=".concat(post.id);
  clone.querySelector('b').innerText = post.title;
  if (post.body) {
    clone.querySelector('span').innerText = post.body;
  } else {
    clone.querySelector('span').remove();
  }
  const commentsBadge = (0, _badge.commentsBadgeTemplate)(post.comments);
  const tagsBadges = (0, _tags.postTags)(post);
  const children = [commentsBadge, tagsBadges];
  if (post.author) {
    children.push((0, _thumbnail.profileThumbnail)(post.author));
  }
  clone.querySelector('.card-header').append(...children);
  return clone;
};
exports.postHeader = postHeader;