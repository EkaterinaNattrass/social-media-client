const validEmail = 'pineapple@noroff.no';
const validPassword = '12345678';
const invalidEmail = 'example@noroff.no';
const invalidPassword = 'invalidPassword';

describe('login', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('logs in and gives access to the valid profile', () => {
    cy.get('header').within(() => {
      cy.get('.text-end').within(() => {
        cy.get('button.btn.btn-success').click();
      });
    });
    cy.get('#loginEmail').type(validEmail);
    cy.get('#loginPassword').type(validPassword);
    cy.get('#loginModal').find('button[type=submit]').click();
    cy.get('.profile-posts').should('be.visible');
    cy.url().should('include', '?view=profile&name=pineapple', {
      timeout: 10000,
    });
  });

  it('denies login and access if the email is invalid', () => {
    cy.get('header').within(() => {
      cy.get('.text-end').within(() => {
        cy.get('button.btn.btn-success').click();
      });
    });
    cy.get('#loginEmail').type(invalidEmail);
    cy.get('#loginPassword').type(validPassword);
    cy.get('#loginModal').find('button[type=submit]').click();
    cy.visit('/');
  });

  it('denies login and access if the password is invalid', () => {
    cy.get('header').within(() => {
      cy.get('.text-end').within(() => {
        cy.get('button.btn.btn-success').click();
      });
    });
    cy.get('#loginEmail').type(validEmail);
    cy.get('#loginPassword').type(invalidPassword);
    cy.get('#loginModal').find('button[type=submit]').click();
    cy.visit('/');
  });

  it('denies login and access if the email and password are invalid', () => {
    cy.get('header').within(() => {
      cy.get('.text-end').within(() => {
        cy.get('button.btn.btn-success').click();
      });
    });
    cy.get('#loginEmail').type(invalidEmail);
    cy.get('#loginPassword').type(invalidPassword);
    cy.get('#loginModal').find('button[type=submit]').click();
    cy.visit('/');
  });
});
