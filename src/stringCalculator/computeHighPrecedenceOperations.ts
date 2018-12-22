import {
  LowPrecedenceInstruction,
  Instruction,
  Operation,
  HighPrecedenceOperator,
  Operand,
  Operator,
  isHighPrecedenceOperator,
  isLowPrecedenceOperator,
  LowPrecedenceOperator,
  computeOperation
} from "./definitions";

export function computeHighPrecedenceOperations(instruction: Instruction): LowPrecedenceInstruction {
  return instruction.reduce(reduceForHighPrecedenceOperations, {
    instruction: []
  }).instruction;
}

interface InstructionWithCurrentHighPrecedenceOperation {
  instruction: LowPrecedenceInstruction;
  currentOperation?: Operation<HighPrecedenceOperator>;
}

function reduceForHighPrecedenceOperations(
  { instruction, currentOperation }: InstructionWithCurrentHighPrecedenceOperation,
  next: Operand | Operator
): InstructionWithCurrentHighPrecedenceOperation {
  if (isHighPrecedenceOperator(next)) {
    return goThroughAndRememberOperation(instruction, currentOperation, next);
  }
  if (isLowPrecedenceOperator(next)) {
    return goThrough(instruction, currentOperation, next);
  }
  if (currentOperation && currentOperation.operator) {
    return computeOperationAndReplaceInInstruction(instruction, currentOperation, next);
  }
  return goThroughAndRememberLeftOperand(instruction, next);
}

function goThroughAndRememberOperation(
  instruction: LowPrecedenceInstruction,
  { leftOperand }: Operation<HighPrecedenceOperator>,
  next: HighPrecedenceOperator
): InstructionWithCurrentHighPrecedenceOperation {
  return {
    instruction,
    currentOperation: {
      leftOperand: leftOperand,
      operator: next
    }
  };
}

function goThrough(
  instruction: LowPrecedenceInstruction,
  currentOperation: Operation<HighPrecedenceOperator>,
  next: LowPrecedenceOperator
): InstructionWithCurrentHighPrecedenceOperation {
  const newInstruction: LowPrecedenceInstruction = instruction.slice();
  newInstruction.push(next);
  return {
    instruction: newInstruction,
    currentOperation
  };
}

function computeOperationAndReplaceInInstruction(
  instruction: LowPrecedenceInstruction,
  currentOperation: Operation<HighPrecedenceOperator>,
  next: Operand
): InstructionWithCurrentHighPrecedenceOperation {
  const newInstruction: LowPrecedenceInstruction = instruction.slice();
  const operation: Operation<HighPrecedenceOperator> = {
    ...currentOperation,
    rightOperand: next
  };
  const resultOfOperation: number = computeOperation(operation);
  newInstruction.pop();
  newInstruction.push(resultOfOperation);
  return {
    instruction: newInstruction,
    currentOperation: {
      leftOperand: resultOfOperation
    }
  };
}

function goThroughAndRememberLeftOperand(
  instruction: LowPrecedenceInstruction,
  next: Operand
): InstructionWithCurrentHighPrecedenceOperation {
  const newInstruction: LowPrecedenceInstruction = instruction.slice();
  newInstruction.push(next);
  return {
    instruction: newInstruction,
    currentOperation: {
      leftOperand: next
    }
  };
}
