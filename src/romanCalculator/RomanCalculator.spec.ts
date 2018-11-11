import { romanCalculator } from "./RomanCalculator";

describe("Test of the test framework", function() {
  it.skip("Should fail", function() {
    expect(0).toEqual(1);
  });

  it("Should pass", function() {
    expect(0).toEqual(0);
  });
});

describe("Simple concatenation", function() {
  it("I + I = II", function() {
    expect(romanCalculator("I", "I", "+")).toEqual("II");
  });

  it("I + II = III", function() {
    expect(romanCalculator("I", "II", "+")).toEqual("III");
  });
});

describe("Replacement by higher digits", function() {
  it("I + III = IV", function() {
    expect(romanCalculator("I", "III", "+")).toEqual("IV");
  });

  it("II + III = V", function() {
    expect(romanCalculator("II", "III", "+")).toEqual("V");
  });
});

describe("Replacement by lower digits", function() {
  it("IV + I = V", function() {
    expect(romanCalculator("IV", "I", "+")).toEqual("V");
  });
});

describe("Calculations with higher numbers, hence many successive replacements", function() {
  it("IX + I = X", function() {
    expect(romanCalculator("IX", "I", "+")).toEqual("X");
  });

  it("XL + X = L", function() {
    expect(romanCalculator("XL", "X", "+")).toEqual("L");
  });

  it("XC + X = C", function() {
    expect(romanCalculator("XC", "X", "+")).toEqual("C");
  });

  it("CD + C = D", function() {
    expect(romanCalculator("CD", "C", "+")).toEqual("D");
  });
});

describe("Integration", function() {
  it("XIV + LX = LXXIV", function() {
    expect(romanCalculator("XIV", "LX", "+")).toEqual("LXXIV");
  });
});
