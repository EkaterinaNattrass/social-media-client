'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.unfollowListener = unfollowListener;
require('core-js/modules/es.promise.js');
var _index = require('../../api/profiles/index.js');
async function unfollowListener(event) {
  const button = event.srcElement;
  const name = button.dataset.name;
  if (name) {
    try {
      await (0, _index.unfollowProfile)(name);
      location.reload();
    } catch (_unused) {
      return alert('There was a problem unfollowing this profile');
    }
  }
}
