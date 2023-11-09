"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postFormTemplate = void 0;
require("core-js/modules/es.promise.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.url.js");
require("core-js/modules/web.url-search-params.js");
var _index = require("../../api/index.js");
var _clear = require("../../tools/clear.js");
var _instance = require("../instance.js");
var _thumbnail = require("./thumbnail.js");
function populateForm(post, form) {
  form.title.value = post.title;
  form.body.value = post.body;
  form.media.value = post.media;
  form.tags.value = post.tags.join(', ');
}
function populatePreview(post, preview) {
  const page = (0, _thumbnail.postThumbnailTemplate)(post, false);
  (0, _clear.clear)(preview);
  preview.append(page);
}
const postFormTemplate = post => {
  const clone = (0, _instance.templateInstance)('postForm');
  const form = clone.querySelector('#postForm');
  const button = clone.querySelector('[data-action=submit]');
  const preview = clone.querySelector('#postPreview');
  if (post && post.id) {
    populateForm(post, form);
    populatePreview(post, preview);
    button.querySelector('[data-action=publish]').style.display = 'none';
  } else {
    button.querySelector('[data-action=update]').style.display = 'none';
  }
  form.addEventListener('input', () => {
    const post = {
      title: form.title.value,
      body: form.body.value,
      media: form.media.value,
      tags: form.tags.value.split(', ')
    };
    populatePreview(post, preview);
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const url = new URL(location.href);
    const id = url.searchParams.get('postId');
    const form = event.target;
    const data = new FormData(form);
    const title = data.get('title');
    const body = data.get('body');
    const media = data.get('media');
    const tags = data.get('tags').split(', ');
    let post;
    if (!id) {
      post = await (0, _index.createPost)(title, body, media, tags);
    } else {
      post = await (0, _index.updatePost)(id, title, body, media, tags);
    }
    location.href = "./?view=post&postId=".concat(post.id);
  });
  return clone;
};
exports.postFormTemplate = postFormTemplate;