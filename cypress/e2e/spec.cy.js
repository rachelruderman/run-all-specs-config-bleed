Cypress.config("hello", "world");

describe("page", () => {
  it("Hello is world", () => {
    expect(Cypress.config("hello")).to.equal("world");
  });
});
