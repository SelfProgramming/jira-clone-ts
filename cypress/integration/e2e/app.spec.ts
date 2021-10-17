describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display link', () => {
    cy.get('.App-link').should('contain.text', 'Learn React');
  });
});
