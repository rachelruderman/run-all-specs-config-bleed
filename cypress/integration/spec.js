Cypress.config("hello", "world");

describe("page", () => {
  it("Hello is world", () => {
    cy.wrap(null).should(() => {
      expect(Cypress.config("hello")).to.equal("world");
    });
  });
});
