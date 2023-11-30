const validEmail = 'pineapple@noroff.no';
const validPassword = '12345678';

describe('logout', () => {
  it('allows the user to logout with the logout button', () => {
    cy.visit('/');
    cy.get('header').within(() => {
      cy.get('.text-end').within(() => {
        cy.get('button.btn.btn-success').click();
      });
    });
    cy.get('#loginEmail').type(validEmail);
    cy.get('#loginPassword').type(validPassword);
    cy.get('#loginModal').find('button[type=submit]').click();
    cy.get('.profile-posts').should('be.visible');
    cy.get('header').within(() => {
      cy.get('.text-end').within(() => {
        cy.get('button.btn.btn-outline-warning').click();
      });
    });
    cy.get('.profile-posts').should('not.exist');
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/');
  });
});
