import { Instruction, Operator, Operand, isOperator } from "./definitions";

export function parseInstruction(instruction: string): Instruction {
  const chunks: string[] = instruction.split(" ");
  return chunks.map(parseChunkWithSideEffect);
}

function parseChunkWithSideEffect(chunk: string): Operator | Operand {
  const chunkAsOperand: Operand = parseInt(chunk);
  if (!isNaN(chunkAsOperand)) {
    return chunkAsOperand;
  }
  if (isOperator(chunk)) {
    return chunk;
  }
  throw new Error(`Expected number or operator (+, -, *, /) but got '${chunk}'`);
}
