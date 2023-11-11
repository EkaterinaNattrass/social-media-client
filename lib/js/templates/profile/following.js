'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.profileFollowing = void 0;
require('core-js/modules/web.dom-collections.iterator.js');
var _thumbnail = require('./thumbnail.js');
const profileFollowing = (profile) => {
  if (profile.following && profile.following.length) {
    const element = document.createElement('div');
    element.classList.add('following');
    element.append(
      'Following',
      ...profile.following.map(_thumbnail.profileThumbnail),
    );
    return element;
  }
  return '\r\n';
};
exports.profileFollowing = profileFollowing;
