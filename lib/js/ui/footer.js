"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.footer = void 0;
var _index = require("../api/index.js");
var _load = require("../storage/load.js");
var _index2 = require("../templates/profile/index.js");
const footer = () => {
  const footer = document.querySelector('footer');
  const actions = footer.querySelector('#footerActions');
  if ((0, _index.isLoggedIn)()) {
    const profile = (0, _load.load)('profile');
    actions.prepend((0, _index2.profileButton)(profile));
  }
};
exports.footer = footer;