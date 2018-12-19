import {
  Operation,
  LowPrecedenceOperator,
  LowPrecedenceInstruction,
  Operand,
  isLowPrecedenceOperator,
  computeOperation as compute
} from "./definitions";

export function computeLowPrecedenceOperations(instruction: LowPrecedenceInstruction): number {
  return instruction.reduce(reduceForLowPrecedenceOperations, {} as ResultWithCurrentLowPrecedenceOperation).result;
}

interface ResultWithCurrentLowPrecedenceOperation {
  result?: number;
  currentOperation?: Operation<LowPrecedenceOperator>;
}

function reduceForLowPrecedenceOperations(
  { result, currentOperation }: ResultWithCurrentLowPrecedenceOperation,
  next: Operand | LowPrecedenceOperator
): ResultWithCurrentLowPrecedenceOperation {
  if (isLowPrecedenceOperator(next)) {
    return goThroughAndRememberOperation(result, next);
  }
  if (currentOperation) {
    return computeOperation(currentOperation, next);
  }
  return goThrough(next);
}

function goThroughAndRememberOperation(
  result: number,
  next: LowPrecedenceOperator
): ResultWithCurrentLowPrecedenceOperation {
  return {
    result,
    currentOperation: {
      leftOperand: result,
      operator: next
    }
  };
}

function computeOperation(currentOperation: Operation<LowPrecedenceOperator>, next: number) {
  const operation: Operation<LowPrecedenceOperator> = {
    ...currentOperation,
    rightOperand: next
  };
  const resultOfOperation: number = compute(operation);
  return {
    result: resultOfOperation
  };
}

function goThrough(next: number): ResultWithCurrentLowPrecedenceOperation {
  return {
    result: next
  };
}
