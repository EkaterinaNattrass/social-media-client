"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emojiSubset = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
var _emoji = _interopRequireDefault(require("../data/emoji.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const emojiSubset = exports.emojiSubset = function emojiSubset() {
  let reactions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return _emoji.default.filter(emoji => !reactions.map(reaction => reaction.symbol).includes(emoji));
};