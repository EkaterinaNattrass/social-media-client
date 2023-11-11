'use strict';

require('core-js/modules/es.weak-map.js');
require('core-js/modules/web.dom-collections.iterator.js');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.headers = void 0;
var storage = _interopRequireWildcard(require('../storage/index.js'));
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
const headers = (contentType) => {
  const token = storage.load('token');
  const headers = {};
  if (contentType) {
    headers['Content-Type'] = contentType;
  }
  if (token) {
    headers.Authorization = 'Bearer '.concat(token);
  }
  return headers;
};
exports.headers = headers;
