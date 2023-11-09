"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPost = createPost;
require("core-js/modules/es.promise.js");
require("core-js/modules/es.json.stringify.js");
var _constants = require("../constants.js");
var _headers = require("../headers.js");
async function createPost(title, body, media, tags) {
  const response = await fetch("".concat(_constants.apiPath, "/social/posts/"), {
    method: 'post',
    body: JSON.stringify({
      title,
      body,
      media,
      tags
    }),
    headers: (0, _headers.headers)('application/json')
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}