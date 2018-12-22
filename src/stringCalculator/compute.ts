import { Instruction, LowPrecedenceInstruction } from "./definitions";
import { computeHighPrecedenceOperations } from "./computeHighPrecedenceOperations";
import { computeLowPrecedenceOperations } from "./computeLowPrecedenceOperations";

export function compute(instruction: Instruction): number {
  const lowPrecedenceInstruction: LowPrecedenceInstruction = computeHighPrecedenceOperations(instruction);
  return computeLowPrecedenceOperations(lowPrecedenceInstruction);
}
