import { Instruction } from "./definitions";
import { compute } from "./compute";

describe("Compute low precedence instructions, with priority to multiplication and division (no parentheses)", function() {
  it("Should compute 1 + 2 * 3 / -1 + 5 (integration)", function() {
    // GIVEN
    const instruction: Instruction = [1, "+", 2, "*", 3, "/", -1, "+", 5];

    // WHEN
    const actual: number = compute(instruction);

    // THEN
    const expected: number = 0;
    expect(actual).toEqual(expected);
  });
});
