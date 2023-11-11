'use strict';

require('core-js/modules/es.weak-map.js');
require('core-js/modules/web.dom-collections.iterator.js');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.registerListener = registerListener;
require('core-js/modules/es.promise.js');
var auth = _interopRequireWildcard(require('../../api/auth/index.js'));
function _getRequireWildcardCache(e) {
  if ('function' != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ('object' != typeof e && 'function' != typeof e))
    return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ('default' !== u && Object.prototype.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n.default = e), t && t.set(e, n), n;
}
async function registerListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const email = data.get('email');
  const name = data.get('name');
  const password = data.get('password');
  const avatar = data.get('avatar');
  try {
    await auth.register(name, email, password, avatar);
  } catch (_unused) {
    return alert('There was a problem creating your account');
  }
  try {
    await auth.login(email, password);
    location.reload();
  } catch (_unused2) {
    return alert('There was a problem logging into your new account');
  }
}
