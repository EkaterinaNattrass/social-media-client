// eslint-disable-next-line no-unused-vars
import { logout } from './logout.js';
import { remove } from '../../storage/index.js';
import 'jest-localstorage-mock';

jest.mock('../../storage/index.js', () => {
  return {
    remove: jest.fn()
  };
});

describe('logout', () => {
  it('clears token from browser storage', () => {
    logout();
    expect(remove).toHaveBeenCalledWith('token')
}); 
})