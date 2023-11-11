const validEmail = 'pineapple@study.noroff.no';
const validPassword = '12345678';

describe('logout', () => {
  it('allows the user to logout with the logout button'),
    () => {
      cy.visit('/');
      cy.get('#loginModal').contains('Logout').click();
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit('/');
    };
});
