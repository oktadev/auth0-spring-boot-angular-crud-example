describe('Groups', () => {

  beforeEach(() => {
    cy.visit('/groups')
  });

  it('add button should exist', () => {
    cy.get('#add').should('exist');
  });

  it('should add a new group', () => {
    cy.get('#add').click();
    cy.get('#name').type('Test Group');
    cy.get('#save').click();
    cy.get('.alert-success').should('exist');
  });

  it('should edit a group', () => {
    cy.get('a').last().click();
    cy.get('#name').should('have.value', 'Test Group');
    cy.get('#cancel').click();
  });

  it('should delete a group', () => {
    cy.get('button').last().click();
    cy.on('window:confirm', () => true);
    cy.get('.alert-success').should('exist');
  });
});
