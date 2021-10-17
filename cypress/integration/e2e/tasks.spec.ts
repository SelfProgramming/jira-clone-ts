describe('Tasks page', () => {
  const taskCardDataHook = 'task-card-1';

  beforeEach(() => {
    cy.visit('/');
  });

  it('should open delete confirmation dialog', () => {
    cy.byHook(taskCardDataHook).get('button').click();
    cy.byHook('app-dialog').should('be.visible');
  });

  it('should cancel task deletion', () => {
    cy.byHook(taskCardDataHook).get('button').click();
    cy.byHook(`${taskCardDataHook}-dialog-cancel-btn`).click();
    cy.byHook(taskCardDataHook).should('be.visible');
  });
});
