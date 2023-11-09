"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePost = updatePost;
require("core-js/modules/es.promise.js");
require("core-js/modules/es.json.stringify.js");
var _state = require("../auth/state.js");
var _constants = require("../constants.js");
var _headers = require("../headers.js");
async function updatePost(id, title, body, media, tags) {
  const {
    name: owner
  } = (0, _state.profile)();
  const response = await fetch("".concat(_constants.apiPath, "/social/posts/").concat(id), {
    method: 'put',
    body: JSON.stringify({
      title,
      body,
      media,
      tags,
      owner
    }),
    headers: (0, _headers.headers)('application/json')
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}