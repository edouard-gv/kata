type Operator = "+" | "-" | "*" | "/";

type Operand = number;

interface Operation {
  firstOperand: Operand;
  secondOperand: Operand;
  operator: Operator;
}

export function rpn(instruction: string): number {
  return rpnHelper(instruction.split(" ").reverse()).result;
}

function rpnHelper(instruction: string[]): { result: number; instruction: string[] } {
  const [next, ...remaining] = instruction;
  if (isOperator(next)) {
    const { result: secondOperand, instruction: remainingAfterSecondOperand } = rpnHelper(remaining);
    const { result: firstOperand, instruction: remainingAfterFirstOperand } = rpnHelper(remainingAfterSecondOperand);
    const operation: Operation = {
      firstOperand,
      secondOperand,
      operator: next
    };
    const result: number = computeOperation(operation);
    return {
      result,
      instruction: remainingAfterFirstOperand
    };
  }
  return {
    result: parseInt(next),
    instruction: remaining
  };
}

function isOperator(s: Operator | string): s is Operator {
  return s === "+" || s === "-" || s === "*" || s === "/";
}

function computeOperation({ firstOperand, secondOperand, operator }: Operation): number {
  switch (operator) {
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "*":
      return firstOperand * secondOperand;
    case "/":
      return firstOperand / secondOperand;
    default:
      throw new Error(makeOperatorErrorMessage(operator));
  }
}

function makeOperatorErrorMessage(received: string): string {
  return `Error: an operator is expected, but received '${received}'. Allowed operators are: +, -, * and /`;
}
