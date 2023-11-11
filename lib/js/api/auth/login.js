'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.login = login;
require('core-js/modules/es.promise.js');
require('core-js/modules/es.json.stringify.js');
var _constants = require('../constants.js');
var _headers = require('../headers.js');
var _index = require('../../storage/index.js');
async function login(email, password) {
  const response = await fetch(
    ''.concat(_constants.apiPath, '/social/auth/login'),
    {
      method: 'post',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: (0, _headers.headers)('application/json'),
    },
  );
  if (response.ok) {
    const profile = await response.json();
    (0, _index.save)('token', profile.accessToken);
    delete profile.accessToken;
    (0, _index.save)('profile', profile);
    return profile;
  }
  throw new Error(response.statusText);
}
