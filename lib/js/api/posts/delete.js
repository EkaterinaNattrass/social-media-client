'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.deletePost = deletePost;
require('core-js/modules/es.promise.js');
var _constants = require('../constants.js');
var _headers = require('../headers.js');
async function deletePost(id) {
  const response = await fetch(
    ''.concat(_constants.apiPath, '/social/posts/').concat(id),
    {
      method: 'delete',
      headers: (0, _headers.headers)(),
    },
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}
