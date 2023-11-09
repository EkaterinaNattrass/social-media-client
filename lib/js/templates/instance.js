"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templateInstance = void 0;
const templateInstance = exports.templateInstance = function templateInstance() {
  let id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '404';
  const template = document.querySelector("template#".concat(id));
  if (template) {
    return template.content.cloneNode(true);
  }
  throw new Error("Template #".concat(id, " not found"));
};