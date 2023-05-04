import './commands';

beforeEach(() => {
  if (Cypress.env('E2E_USERNAME') === undefined) {
    console.error('E2E_USERNAME is not defined');
    alert('E2E_USERNAME is not defined');
    return;
  }
  cy.visit('/')
  cy.get('#login').click()
  cy.login(
    Cypress.env('E2E_USERNAME'),
    Cypress.env('E2E_PASSWORD')
  )
})

afterEach(() => {
  cy.visit('/')
  cy.get('#logout').click()
})
