'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.profileList = void 0;
require('core-js/modules/es.promise.js');
require('core-js/modules/web.dom-collections.iterator.js');
var _index = require('../templates/index.js');
const profileList = async (profiles) => {
  const element = document.createElement('div');
  element.classList.add('profile', 'list');
  element.append(
    ...profiles.map((profile) => (0, _index.profileButton)(profile)),
  );
  return element;
};
exports.profileList = profileList;
