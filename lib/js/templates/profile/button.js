'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.profileButton = void 0;
var _instance = require('../instance.js');
const profileButton = (profile) => {
  const clone = (0, _instance.templateInstance)('profileButton');
  clone.querySelector('img').src = profile.avatar;
  clone.querySelector('.btn').innerText = profile.name;
  clone.querySelector('a').href = './?view=profile&name='.concat(profile.name);
  return clone;
};
exports.profileButton = profileButton;
