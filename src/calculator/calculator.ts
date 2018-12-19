import { compute } from "./compute";
import { parseInstruction } from "./parsing";

/*
  * Evaluates and replaces 1st final (without sub-parentheses) parentheses, e.g.
  * '2 * (1 + 3 * (2 - 3)) + 5 * (-1)' => evaluates '(2 - 3)' to '-1'
  * '2 * (1 + 3 * -1) + 5 * (-1)' => evaluates '(1 + 3 * -1)' to '-2'
  * '2 * -2 + 5 * (-1)' => evaluates '(-1)' to '-1'
  * '2 * -2 + 5 * -1'
*/
export function calculator(instruction: string): number {
  let instructionWithReplacement: string = instruction;
  do {
    const nextInstructionWithReplacement: string = evaluateAndReplaceFirstFinalInstructionWithinParentheses(
      instructionWithReplacement
    );
    if (nextInstructionWithReplacement === instructionWithReplacement) {
      break;
    }
    instructionWithReplacement = nextInstructionWithReplacement;
  } while (true);
  return compute(parseInstruction(instructionWithReplacement));
}

function evaluateAndReplaceFirstFinalInstructionWithinParentheses(instruction: string): string {
  return instruction.replace(/\(([^\(|\)])*\)/, evaluateInstructionWithinParentheses);
}

function evaluateInstructionWithinParentheses(instructionWithParentheses: string): string {
  const instruction: string = instructionWithParentheses.substr(1, instructionWithParentheses.length - 2);
  return compute(parseInstruction(instruction)).toString();
}
