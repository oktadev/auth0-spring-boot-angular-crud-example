/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

Cypress.Commands.add('login', (username: string, password: string) => {
  Cypress.log({
    message: [`🔐 Authenticating: ${username}`],
    autoEnd: false,
  })
  cy.origin(Cypress.env('E2E_DOMAIN'), {args: {username, password}},
    ({username, password}) => {
      cy.get('input[name=username]').type(username);
      cy.get('input[name=password]').type(`${password}{enter}`, {log: false});
    }
  );
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Cypress.Chainable;
    }
  }
}

// Convert this to a module instead of script (allows import/export)
export {};
