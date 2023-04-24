// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

Cypress.Commands.add('getOauth2Data', () => {
  cy.request({
    url: '/oauth2/authorization/okta',
    followRedirect: false,
  }).then(response => {
    const data = {
      url: response.headers['location'],
    };
    cy.wrap(data).as('oauth2Data');
  });
});

Cypress.Commands.add('oauthLogin', (oauth2Data, username: string, password: string) => {
  const url = new URL(oauth2Data.url);
  cy.auth0Login(oauth2Data, username, password);
});

Cypress.Commands.add('auth0Login', (oauth2Data, username: string, password: string) => {
  cy.request({
    url: `${oauth2Data.url}`,
    followRedirect: true,
  })
    .then(response => {
      const html = document.createElement('html');
      html.innerHTML = response.body;
      const state = html.querySelector('input[name="state"]').value;
      return cy.request({
        method: 'POST',
        url: `${new URL(oauth2Data.url).origin}/u/login`,
        followRedirect: true,
        form: true,
        body: {
          state: state,
          action: 'default',
          username: username,
          password: password,
        },
      });
    })
    .then(() => {
      cy.request({
        url: '/oauth2/authorization/okta',
        followRedirect: true,
      }).then(() => {
        cy.visit('/');
      });
    });
});

Cypress.Commands.add('oauthLogout', () => {
  cy.getCookie('XSRF-TOKEN')
    .then(csrfCookie =>
      cy.location().then(loc$ =>
        cy.request({
          method: 'POST',
          url: `api/logout`,
          headers: {
            'X-XSRF-TOKEN': csrfCookie?.value,
            origin: loc$.origin,
          },
        })
      )
    )
    .then(res => {
      expect(res.status).to.eq(200);
      return cy.request({
        url: res.body.logoutUrl,
        followRedirect: true,
      });
    })
    .then(res => {
      expect(res.status).to.eq(200);
      cy.visit('/');
    });
});

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      getOauth2Data(): Cypress.Chainable;
      oauthLogin(oauth2Data, username: string, password: string): Cypress.Chainable;
      auth0Login(oauth2Data, username: string, password: string): Cypress.Chainable;
      oauthLogout(): Cypress.Chainable;
    }
  }
}

// Convert this to a module instead of script (allows import/export)
export {};
