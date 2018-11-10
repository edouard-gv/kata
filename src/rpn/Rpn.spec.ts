import { rpn } from "./Rpn";

describe("Test of the test framework", function() {
  it.skip("Should fail", function() {
    expect(0).toEqual(1);
  });

  it("Should pass", function() {
    expect(0).toEqual(0);
  });
});

describe("Basic operations and parsing", function() {
  it("rpn('1 1 +') should return 2", function() {
    expect(rpn("1 1 +")).toEqual(2);
  });

  it("rpn('1 1 -') should return 0", function() {
    expect(rpn("1 1 -")).toEqual(0);
  });

  it("rpn('1 2 *') should return 2", function() {
    expect(rpn("1 2 *")).toEqual(2);
  });

  it("rpn('1 2 /') should return 0.5", function() {
    expect(rpn("1 2 /")).toEqual(0.5);
  });
});

describe("Recursivity", function() {
  it("rpn('1 1 + 1 +') should return 3", function() {
    expect(rpn("1 1 + 1 +")).toEqual(3);
  });

  it("rpn('1 2 + 3 * 1 - 4 /') should return 2", function() {
    expect(rpn("1 2 + 3 * 1 - 4 /")).toEqual(2);
  });
});

describe("Edge cases", function() {
  it("Check for double digit numbers", function() {
    expect(rpn("10 1 +")).toEqual(11);
  });
});
