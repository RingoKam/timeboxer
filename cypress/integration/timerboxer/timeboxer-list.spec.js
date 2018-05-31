/// <reference types="Cypress" />

describe("App First load should take user to list", () => {
  beforeEach(() => {
    cy.visit("/");
  })  

  it("take user to list page", () => {
    const url = cy.url();
    cy.url().should('eq', 'http://localhost:4200/list') // => true
  });

  it("the list should be empty", () => {
    cy.get(".empty-list").contains(" - List is Empty - ");
  })
});
