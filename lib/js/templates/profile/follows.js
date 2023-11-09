"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profileFollows = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _followers = require("./followers.js");
var _following = require("./following.js");
const profileFollows = profile => {
  const element = document.createElement('div');
  element.classList.add('profile', 'follows');
  const children = [(0, _followers.profileFollowers)(profile), (0, _following.profileFollowing)(profile)];
  element.append(...children);
  return element;
};
exports.profileFollows = profileFollows;