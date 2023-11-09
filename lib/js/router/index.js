"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.promise.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _index = require("../api/index.js");
var _read = require("../api/profiles/read.js");
var _load = require("../storage/load.js");
var _save = require("../storage/save.js");
var _index2 = require("../templates/index.js");
var _renderView = require("../ui/renderView.js");
var views = _interopRequireWildcard(require("../views/index.js"));
var _searchParams = require("./searchParams.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function authGuard() {
  let callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
  let view = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if ((0, _index.isLoggedIn)()) {
    return callback();
  } else {
    if (view) {
      location.href = "./";
    }
    document.querySelector('[data-auth=register]').click();
    const message = document.createElement('div');
    message.classList.add('alert', 'alert-warning');
    message.innerText = 'Please register or login to view this page.';
    return message;
  }
}
async function route() {
  const {
    view,
    postId,
    name
  } = (0, _searchParams.getSearchParams)();
  switch (view) {
    case 'post':
      return authGuard(() => {
        const loader = (0, _index2.postLoaderTemplate)();
        (0, _renderView.renderView)(loader);
        return views.postPage(postId);
      }, view);
    case 'profile':
      return authGuard(() => views.profilePage(name), view);
    case 'profiles':
      return authGuard(async () => {
        const profiles = await (0, _read.getProfiles)();
        return views.profileList(profiles);
      }, view);
    case 'posts':
    default:
      return authGuard(async () => {
        const loaders = Array.from({
          length: (0, _load.load)('posts:lastTime') || 3
        }, () => (0, _index2.postLoaderTemplate)());
        (0, _renderView.renderView)(...loaders);
        const posts = await (0, _index.getPosts)();
        (0, _save.save)('posts:lastTime', posts.length);
        return views.postList(posts);
      }, view);
  }
}
var _default = async () => {
  const view = await route();
  (0, _renderView.renderView)(view);
};
exports.default = _default;