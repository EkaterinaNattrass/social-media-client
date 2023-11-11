'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.comment = comment;
require('core-js/modules/es.promise.js');
require('core-js/modules/es.json.stringify.js');
var _constants = require('../constants.js');
var _headers = require('../headers.js');
async function comment(postId, body, replyToId) {
  const response = await fetch(
    ''.concat(_constants.apiPath, '/social/posts/').concat(postId, '/comment'),
    {
      method: 'post',
      body: JSON.stringify({
        body,
        replyToId,
      }),
      headers: (0, _headers.headers)('application/json'),
    },
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}
