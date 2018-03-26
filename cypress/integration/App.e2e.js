describe('App E2E', () => {
  it('should have a header', () => {
    cy.visit('/');

    cy.get('h1')
      .should('have.text', 'My Counter');
  });

  it('should increment and decrement a counter', () => {
    cy.get('p').should('have.text', '12');

    cy.contains('Increment').click();
    cy.get('p').should('have.text', '13');

    cy.contains('Decrement').click();
    cy.get('p').should('have.text', '12');

    cy.contains('Decrement').click();
    cy.get('p').should('have.text', '11');
  });
});