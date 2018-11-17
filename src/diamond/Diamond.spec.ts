import { diamond, buildMakeRowFunction } from "./Diamond";

describe("Test of the test framework", function() {
  it.skip("Should fail", function() {
    expect(0).toEqual(1);
  });

  it("Should pass", function() {
    expect(0).toEqual(0);
  });
});

describe("Width = 1", function() {
  it("Should write a diamond of one star", function() {
    expect(diamond(1)).toEqual([["*"]]);
  });
});

let makeRow;

describe("Width = 3", function() {
  beforeAll(function() {
    makeRow = buildMakeRowFunction(2);
  });

  it.skip("makeHalfRow(0) should write half of the first row", function() {
    // expect(makeHalfRow(0)).toEqual([" ", "*"]);
  });

  it.skip("makeHalfRow(1) should write half of the second row", function() {
    // expect(makeHalfRow(1)).toEqual(["*", "*"]);
  });

  it("makeRow(0) should write the first row", function() {
    expect(makeRow(0)).toEqual([" ", "*", " "]);
  });

  it("makeRow(1) should write the second row", function() {
    expect(makeRow(1)).toEqual(["*", "*", "*"]);
  });
});

describe("Width = 5", function() {
  beforeAll(function() {
    makeRow = buildMakeRowFunction(3);
  });

  it("makeRow(0) should write the 1st row", function() {
    expect(makeRow(0)).toEqual([" ", " ", "*", " ", " "]);
  });

  it("makeRow(1) should write the 2nd row", function() {
    expect(makeRow(1)).toEqual([" ", "*", "*", "*", " "]);
  });

  it("makeRow(2) should write the 3rd row", function() {
    expect(makeRow(2)).toEqual(["*", "*", "*", "*", "*"]);
  });
});

describe("Width = 5", function() {
  it("diamond(5) should write the full diamond", function() {
    expect(diamond(5)).toEqual([
      [" ", " ", "*", " ", " "],
      [" ", "*", "*", "*", " "],
      ["*", "*", "*", "*", "*"],
      [" ", "*", "*", "*", " "],
      [" ", " ", "*", " ", " "]
    ]);
  });
});
