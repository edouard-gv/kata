import { Instruction, LowPrecedenceInstruction } from "./definitions";
import { computeHighPrecedenceOperations } from "./computeHighPrecedenceOperations";

describe("Compute high precedence instructions, with priority to multiplication and division (no parentheses)", function() {
  it("Should compute 1", function() {
    // GIVEN
    const instruction: Instruction = [1];

    // WHEN
    const actual: LowPrecedenceInstruction = computeHighPrecedenceOperations(instruction);

    // THEN
    const expected: LowPrecedenceInstruction = [1];
    expect(actual).toEqual(expected);
  });

  it("Should compute 3 * 2", function() {
    // GIVEN
    const instruction: Instruction = [3, "*", 2];

    // WHEN
    const actual: LowPrecedenceInstruction = computeHighPrecedenceOperations(instruction);

    // THEN
    const expected: LowPrecedenceInstruction = [6];
    expect(actual).toEqual(expected);
  });

  it("Should compute 1 + 3 * 2", function() {
    // GIVEN
    const instruction: Instruction = [1, "+", 3, "*", 2];

    // WHEN
    const actual: LowPrecedenceInstruction = computeHighPrecedenceOperations(instruction);

    // THEN
    const expected: LowPrecedenceInstruction = [1, "+", 6];
    expect(actual).toEqual(expected);
  });

  it("Should compute 1 + 3 * 2 - 1", function() {
    // GIVEN
    const instruction: Instruction = [1, "+", 3, "*", 2, "-", 1];

    // WHEN
    const actual: LowPrecedenceInstruction = computeHighPrecedenceOperations(instruction);

    // THEN
    const expected: LowPrecedenceInstruction = [1, "+", 6, "-", 1];
    expect(actual).toEqual(expected);
  });

  it("Should compute 1 + 3 * 2 * 5", function() {
    // GIVEN
    const instruction: Instruction = [1, "+", 3, "*", 2, "*", 5];

    // WHEN
    const actual: LowPrecedenceInstruction = computeHighPrecedenceOperations(instruction);

    // THEN
    const expected: LowPrecedenceInstruction = [1, "+", 30];
    expect(actual).toEqual(expected);
  });
});
