/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-hook attribute.
     * @example cy.byHook('greeting')
     */
    byHook(dataHook: string): Chainable<Element>;
  }
}
