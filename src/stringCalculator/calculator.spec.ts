import { calculator } from "./calculator";

describe("Compute instructions provided as string (no parentheses)", function() {
  it("Should compute '1 + 2 * 3 / -1 + 5'", function() {
    // GIVEN
    const instruction: string = "1 + 2 * 3 / -1 + 5";

    // WHEN
    const actual: number = calculator(instruction);

    // THEN
    const expected: number = 0;
    expect(actual).toEqual(expected);
  });
});

describe("Handle parentheses", function() {
  it("Should compute '2 * 1 + 1 - 3'", function() {
    // GIVEN
    const instruction: string = "2 * 1 + 1 - 3";

    // WHEN
    const actual: number = calculator(instruction);

    // THEN
    const expected: number = 0;
    expect(actual).toEqual(expected);
  });

  it("Should compute '2 * (1 + 1) - 3'", function() {
    // GIVEN
    const instruction: string = "2 * (1 + 1) - 3";

    // WHEN
    const actual: number = calculator(instruction);

    // THEN
    const expected: number = 1;
    expect(actual).toEqual(expected);
  });

  it("Should compute '2 * (1 + 3 * (1 + 1))'", function() {
    // GIVEN
    const instruction: string = "2 * (1 + 3 * (1 + 1))";

    // WHEN
    const actual: number = calculator(instruction);

    // THEN
    const expected: number = 14;
    expect(actual).toEqual(expected);
  });

  it("Should compute '2 * (1 + 3) + 5 * (1 + 1)'", function() {
    // GIVEN
    const instruction: string = "2 * (1 + 3) + 5 * (1 + 1)";

    // WHEN
    const actual: number = calculator(instruction);

    // THEN
    const expected: number = 18;
    expect(actual).toEqual(expected);
  });

  it("Should compute '2 * (1 + 3 * (2 - 3)) + 5 * (-1)'", function() {
    // GIVEN
    const instruction: string = "2 * (1 + 3 * (2 - 3)) + 5 * (-1)";

    // WHEN
    const actual: number = calculator(instruction);

    // THEN
    const expected: number = -9;
    expect(actual).toEqual(expected);
  });
});
