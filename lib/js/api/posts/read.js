'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getPost = getPost;
exports.getPosts = getPosts;
require('core-js/modules/es.promise.js');
var _constants = require('../constants.js');
var _headers = require('../headers.js');
async function getPosts() {
  let limit =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
  let offset =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  const response = await fetch(
    ''
      .concat(_constants.apiPath, '/social/posts?limit=')
      .concat(limit, '&offset=')
      .concat(offset, '&_reactions=true&_author=true&_comments=true'),
    {
      headers: (0, _headers.headers)(),
    },
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}
async function getPost(id) {
  const response = await fetch(
    ''
      .concat(_constants.apiPath, '/social/posts/')
      .concat(id, '?_reactions=true&_author=true&_comments=true'),
    {
      headers: (0, _headers.headers)(),
    },
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}
