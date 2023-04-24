/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

Cypress.Commands.add('authenticatedRequest', data => {
  return cy.getCookie('XSRF-TOKEN').then(csrfCookie => {
    return cy.request({
      ...data,
      headers: {
        ...data.headers,
        'X-XSRF-TOKEN': csrfCookie.value,
      },
    });
  });
});

Cypress.Commands.add('login', (username: string, password: string) => {
  Cypress.log({
    message: [`🔐 Authenticating: ${username}`],
    autoEnd: false,
  })
  cy.origin(Cypress.env('E2E_DOMAIN'), {args: {username, password}},
    ({username, password}) => {
      cy.get('input[name=username]').type(username);
      cy.get('input[name=password]').type(password, {log: false});
      cy.get('button[type=submit]').first().click();
    }
  );
});

declare global {
  namespace Cypress {
    interface Chainable {
      authenticatedRequest(data): Cypress.Chainable;
      login(username: string, password: string): Cypress.Chainable;
    }
  }
}

// Convert this to a module instead of script (allows import/export)
export {};
