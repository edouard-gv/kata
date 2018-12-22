import { LowPrecedenceInstruction } from "./definitions";
import { computeLowPrecedenceOperations } from "./computeLowPrecedenceOperations";

describe("Compute low precedence instructions, with priority to multiplication and division (no parentheses)", function() {
  it("Should compute 1", function() {
    // GIVEN
    const instruction: LowPrecedenceInstruction = [1];

    // WHEN
    const actual: number = computeLowPrecedenceOperations(instruction);

    // THEN
    const expected: number = 1;
    expect(actual).toEqual(expected);
  });

  it("Should compute 1 + 1", function() {
    // GIVEN
    const instruction: LowPrecedenceInstruction = [1, "+", 1];

    // WHEN
    const actual: number = computeLowPrecedenceOperations(instruction);

    // THEN
    const expected: number = 2;
    expect(actual).toEqual(expected);
  });

  it("Should compute 1 + 2 + 3", function() {
    // GIVEN
    const instruction: LowPrecedenceInstruction = [1, "+", 2, "+", 3];

    // WHEN
    const actual: number = computeLowPrecedenceOperations(instruction);

    // THEN
    const expected: number = 6;
    expect(actual).toEqual(expected);
  });
});
