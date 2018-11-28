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
  it("Should handle double digit numbers", function() {
    expect(rpn("10 1 +")).toEqual(11);
  });

  it("Should handle double digit numbers", function() {
    expect(rpn("2 -1 *")).toEqual(-2);
  });
});

describe("Error management", function() {
  it("Should throw error in case instruction is too short", function() {
    expect(() => rpn("")).toThrowError("Error: insufficient number of arguments");
    expect(() => rpn("1")).toThrowError("Error: insufficient number of arguments");
    expect(() => rpn("1 1")).toThrowError("Error: insufficient number of arguments");
  });

  it("Should throw error in case of wrong instruction (expected number, got operator)", function() {
    expect(() => rpn("/ 1 +")).toThrowError("Error: a number is expected, but received '/'");
  });

  it("Should throw error in case of wrong instruction (expected operator, got number)", function() {
    expect(() => rpn("1 1 1")).toThrowError(
      "Error: an operator is expected, but received '1'. Allowed operators are: +, -, * and /"
    );
  });

  it("Should throw error in case of wrong instruction (expected number or operator, got anything)", function() {
    expect(() => rpn("a 1 +")).toThrowError("Error: a number is expected, but received 'a'");
    expect(() => rpn("1 1 a")).toThrowError(
      "Error: an operator is expected, but received 'a'. Allowed operators are: +, -, * and /"
    );
  });
});
