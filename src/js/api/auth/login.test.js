import { login } from './login.js';
import 'jest-localstorage-mock';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: "noroff123" })
  })
);

describe('login', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('stores the token in browser storage', async () => {

    const email = "noroff@example.com";
    const password = "noroffPassword";

    await login(email, password);

    const token = JSON.parse(localStorage.getItem("token"));

    expect(token).toBe("noroff123");
  });
});











