"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profilePageTemplate = void 0;
var _index = require("../../api/index.js");
var _index2 = require("../../listeners/index.js");
var _postList = require("../../views/postList.js");
var _instance = require("../instance.js");
var _follows = require("./follows.js");
const profilePageTemplate = data => {
  const clone = (0, _instance.templateInstance)('profilePagePrivate');
  const {
    name
  } = (0, _index.profile)();
  clone.querySelector('img.avatar').src = data.avatar;
  clone.querySelector('.profile-name').innerText = data.name;
  clone.querySelector('.profile-email').innerText = data.email;
  clone.querySelector('.upper').prepend((0, _follows.profileFollows)(data));
  if (data.posts && data.posts.length) {
    const posts = (0, _postList.postList)(data.posts);
    clone.querySelector('.profile-posts').append(posts);
  } else {
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-info');
    alert.innerText = 'There are no posts yet...';
    clone.querySelector('.profile-posts').append(alert);
  }
  if (data.name !== name) {
    if (data.followers.find(follower => follower.name === name)) {
      clone.querySelector('[data-action=follow]').remove();
      clone.querySelector('[data-action=unfollow]').dataset.name = data.name;
      clone.querySelector('[data-action=unfollow]').addEventListener('click', _index2.unfollowListener);
    } else {
      clone.querySelector('[data-action=unfollow]').remove();
      clone.querySelector('[data-action=follow]').dataset.name = data.name;
      clone.querySelector('[data-action=follow]').addEventListener('click', _index2.followListener);
    }
  } else {
    clone.querySelector('[data-action=follow]').remove();
    clone.querySelector('[data-action=unfollow]').remove();
  }
  return clone;
};
exports.profilePageTemplate = profilePageTemplate;