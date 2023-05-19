describe('Home', () => {
  it('Visits the initial app page', () => {
    cy.contains('JUG Tours')
    cy.contains('Login')
  })
})
