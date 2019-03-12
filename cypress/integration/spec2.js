Cypress.config("hello", "tom");

describe("page", () => {
  it("Hello is tom", () => {
    cy.wrap(null).should(() => {
      expect(Cypress.config("hello")).to.equal("tom");
    });
  });
});
