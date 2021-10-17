declare namespace Cypress {
  interface Chainable {
    byHook(dataHook: string): Chainable<Element>;
  }
}

Cypress.Commands.add('byHook', (dataHook: string) => {
  return cy.get(`[data-hook=${dataHook}]`);
});
