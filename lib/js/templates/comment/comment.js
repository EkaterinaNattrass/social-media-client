'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.commentTemplate = void 0;
var _index = require('../../api/index.js');
var _searchParams = require('../../router/searchParams.js');
var _instance = require('../instance.js');
const commentTemplate = (exports.commentTemplate = function commentTemplate(
  comment,
) {
  let postOwner =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  const { name } = (0, _index.profile)();
  const clone = (0, _instance.templateInstance)('comment');
  clone.querySelector('.comment-body').innerText = comment.body;
  clone.querySelector('.owner').innerText = comment.owner;
  clone.querySelector('.owner').href = './?view=profile&name='.concat(
    comment.owner,
  );
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-sm', 'btn-success');
  button.innerText = 'Reply';
  button.addEventListener('click', () => {
    (0, _searchParams.setSearchParams)({
      replyToId: comment.id,
    });
  });
  clone.querySelector('.comment-header').prepend(button);
  if (name === comment.owner) {
    clone.querySelector('.comment').classList.add('me');
  }
  if (name === postOwner) {
    clone.querySelector('.comment').classList.add('op');
  }
  return clone;
});
