"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publicPostPage = exports.postPage = void 0;
require("core-js/modules/es.promise.js");
var _index = require("../api/index.js");
var _index2 = require("../templates/index.js");
var _comments = require("../templates/post/comments.js");
const publicPostPage = async post => {
  const element = document.createElement('div');
  element.classList.add('post', 'page', 'mb-3');
  const thumbnail = (0, _index2.postThumbnailTemplate)(post, true);
  const comments = (0, _comments.postCommentsTemplate)(post);
  element.append(thumbnail, comments);
  return element;
};
exports.publicPostPage = publicPostPage;
const postPage = async postId => {
  if (!(0, _index.isLoggedIn)()) {
    location.href = './';
  } else {
    const me = (0, _index.profile)();
    if (postId) {
      const post = await (0, _index.getPost)(postId);
      const owner = post.author.name === me.name;
      if (owner) {
        const page = (0, _index2.postTabsTemplate)();
        const thumbnail = (0, _index2.postThumbnailTemplate)(post);
        const postForm = (0, _index2.postFormTemplate)(post);
        const comments = (0, _comments.postCommentsTemplate)(post);
        page.querySelector('#nav-default').append(thumbnail, comments);
        page.querySelector('#nav-edit').append(postForm);
        return page;
      }
      return publicPostPage(post);
    }
    return (0, _index2.postFormTemplate)();
  }
};
exports.postPage = postPage;