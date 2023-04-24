import './commands';

beforeEach(() => {
  cy.visit('/')
  cy.get('#login').click()
  if (Cypress.env('E2E_USERNAME') === undefined) {
    console.error('E2E_USERNAME is not defined, skipping login');
    return;
  }
  cy.login(
    Cypress.env('E2E_USERNAME'),
    Cypress.env('E2E_PASSWORD')
  )
})

afterEach(() => {
  cy.visit('/')
  cy.get('#logout').click()
})
