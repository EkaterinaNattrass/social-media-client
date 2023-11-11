'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.profileFollowers = void 0;
require('core-js/modules/web.dom-collections.iterator.js');
var _thumbnail = require('./thumbnail.js');
const profileFollowers = (profile) => {
  if (profile && profile.followers && profile.followers.length) {
    const element = document.createElement('div');
    element.classList.add('followers');
    element.append(
      'Followers',
      ...profile.followers.map(_thumbnail.profileThumbnail),
    );
    return element;
  }
  return '\r\n';
};
exports.profileFollowers = profileFollowers;
