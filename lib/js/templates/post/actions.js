'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.postActions = void 0;
require('core-js/modules/es.promise.js');
var _index = require('../../api/index.js');
var _searchParams = require('../../router/searchParams.js');
var _load = require('../../storage/load.js');
var _instance = require('../instance.js');
const postActions = (post) => {
  const profile = (0, _load.load)('profile');
  const clone = (0, _instance.templateInstance)('postActions');
  const owned = post.author && profile.name === post.author.name;
  const { postId } = (0, _searchParams.getSearchParams)();
  const viewing = postId == post.id;
  const viewButton = clone.querySelector('a[data-action=view]');
  const deleteButton = clone.querySelector('button[data-action=delete]');
  if (viewing) {
    viewButton.remove();
  } else {
    viewButton.href = './?view=post&postId='.concat(post.id);
  }
  if (owned) {
    deleteButton.addEventListener('click', async () => {
      await (0, _index.deletePost)(post.id);
      location.href = './';
    });
  } else {
    deleteButton.remove();
  }
  return clone;
};
exports.postActions = postActions;
