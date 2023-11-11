// "use strict";

// require("core-js/modules/es.promise.js");
// require("core-js/modules/es.json.stringify.js");
// var _login = require("./login.js");
// require("jest-localstorage-mock");
// var _globals = _interopRequireDefault(require("@jest/globals"));
// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// const {
//   jest
// } = _globals.default;
// describe('login function', () => {
//   // Mock the fetch function
//   global.fetch = jest.fn(() => Promise.resolve({
//     ok: true,
//     json: () => Promise.resolve({
//       accessToken: 'mocked_token' /* other profile data */
//     })
//   }));

//   beforeEach(() => {
//     localStorage.clear(); // Clear localStorage before each test
//   });

//   test('login should fetch and store a token and profile in localStorage on success', async () => {
//     const email = 'test@example.com';
//     const password = 'testPassword';
//     const result = await (0, _login.login)(email, password);

//     // Assert fetch was called with the expected URL and request options
//     expect(fetch).toHaveBeenCalledWith("".concat(apiPath, "/social/auth/login"), {
//       method: 'post',
//       body: JSON.stringify({
//         email,
//         password
//       }),
//       headers: headers('application/json')
//     });

//     // Assert the function returns the profile data
//     expect(result).toEqual({/* the profile data without accessToken */});

//     // Assert that the token and profile are stored in localStorage
//     expect(localStorage.getItem('token')).toBe('mocked_token');
//     expect(localStorage.getItem('profile')).toEqual(JSON.stringify(result));
//   });
//   test('login should throw an error on failed login', async () => {
//     // Mock a failed login
//     fetch.mockImplementationOnce(() => Promise.resolve({
//       ok: false,
//       statusText: 'Unauthorized'
//     }));
//     const email = 'test@example.com';
//     const password = 'testPassword';
//     try {
//       await (0, _login.login)(email, password);
//     } catch (error) {
//       // Assert that the function throws an error with the correct statusText
//       expect(error.message).toBe('Unauthorized');
//     }

//     // Assert that the token and profile are not stored in localStorage
//     expect(localStorage.getItem('token')).toBe(null);
//     expect(localStorage.getItem('profile')).toBe(null);
//   });
//   test('login should throw an error on network error', async () => {
//     // Mock a network error
//     fetch.mockImplementationOnce(() => Promise.reject(new Error('Network Error')));
//     const email = 'test@example.com';
//     const password = 'testPassword';
//     try {
//       await (0, _login.login)(email, password);
//     } catch (error) {
//       // Assert that the function throws a network error
//       expect(error.message).toBe('Network Error');
//     }

//     // Assert that the token and profile are not stored in localStorage
//     expect(localStorage.getItem('token')).toBe(null);
//     expect(localStorage.getItem('profile')).toBe(null);
//   });
// });
