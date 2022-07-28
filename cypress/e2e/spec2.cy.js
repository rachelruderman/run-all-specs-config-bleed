Cypress.config("hello", "tom");

describe("page", () => {
  it("Hello is tom", () => {
    expect(Cypress.config("hello")).to.equal("tom");
  });
});
