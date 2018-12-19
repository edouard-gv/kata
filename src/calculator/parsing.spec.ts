import { Instruction } from "./definitions";
import { parseInstruction } from "./parsing";

describe("String to operators and operands (no parentheses)", function() {
  it("Should interpret '2 * 3 + 1'", function() {
    // GIVEN
    const instruction: string = "2 * 3 + 1";

    // WHEN
    const actual: Instruction = parseInstruction(instruction);

    // THEN
    const expected: Instruction = [2, "*", 3, "+", 1];
    expect(actual).toEqual(expected);
  });

  it("Should throw error in case of non-interpretable string", function() {
    // GIVEN
    const instruction: string = "2 * 3 + a";

    // THEN
    expect(() => parseInstruction(instruction)).toThrowError("Expected number or operator (+, -, *, /) but got 'a'");
  });

  it("Should handle negative numbers", function() {
    // GIVEN
    const instruction: string = "2 * 3 + -1";

    // WHEN
    const actual: Instruction = parseInstruction(instruction);

    // THEN
    const expected: Instruction = [2, "*", 3, "+", -1];
    expect(actual).toEqual(expected);
  });
});
