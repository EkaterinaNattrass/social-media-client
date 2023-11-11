const validEmail = 'pineapple@study.noroff.no';
const validPassword = '12345678';
const invalidEmail = 'noroff@example.com';
const invalidPassword = 'invalidPassword';

describe('login', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('logs in and gives access to the valid profile', () => {
    cy.get('#loginModal').contains('Login').click();
    cy.get('#loginEmail').type(validEmail);
    cy.get('#loginPassword').type(validPassword);
    cy.get('button[type=submit]').contains('Login').click();
  });

  it('denies login and access if the email is invalid', () => {
    cy.get('#loginModal').contains('Login').click();
    cy.get('#loginEmail').type(invalidEmail);
    cy.get('#loginPassword').type(validPassword);
    cy.get('button[type=submit]').contains('Login').click();
    cy.get('#loginPassword:invalid').should('be.visible');
  });

  it('denies login and access if the password is invalid', () => {
    cy.get('#loginModal').contains('Login').click();
    cy.get('#loginEmail').type(validEmail);
    cy.get('#loginPassword').type(invalidPassword);
    cy.get('button[type=submit]').contains('Login').click();
    cy.get('#loginEmail:invalid').should('be.visible');
  });

  it('denies login and access if the email and password are invalid', () => {
    cy.get('#loginModal').contains('Login').click();
    cy.get('#loginEmail').type(invalidEmail);
    cy.get('#loginPassword').type(invalidPassword);
    cy.get('button[type=submit]').contains('Login').click();
    cy.get('#loginEmail,#loginPassword:invalid').should('be.visible');
  });
});
