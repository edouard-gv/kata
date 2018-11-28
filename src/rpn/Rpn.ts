type Operator = "+" | "-" | "*" | "/";

export function rpn(instruction: string): number {
  return rpnHelper(instruction.split(" "));
}

export function rpnHelper(instruction: Array<number | string>): number {
  const { leftOperand, rightOperand, operator, remaining } = parseInstruction(instruction);
  const result: number = computeOperation(leftOperand, rightOperand, operator);
  if (remaining.length === 0) {
    return result;
  }
  return rpnHelper([result, ...remaining]);
}

function parseInstruction(
  instruction: Array<number | string>
): { leftOperand: number; rightOperand: number; operator: Operator; remaining: Array<number | string> } {
  if (instruction.length < 3) {
    throw new Error(`Error: insufficient number of arguments`);
  }
  const [left, right, operator, ...remaining] = instruction;
  return {
    leftOperand: parseNumber(left as string),
    rightOperand: parseNumber(right as string),
    operator: parseOperator(operator as string),
    remaining
  };
}

function parseNumber(s: string): number {
  const resultOfParsing: number = parseInt(s, 10);
  if (isNaN(resultOfParsing)) {
    throw new Error(makeOperandErrorMessage(s));
  }
  return resultOfParsing;
}

function parseOperator(operator: string): Operator {
  if (!isOperator(operator)) {
    throw new Error(makeOperatorErrorMessage(operator));
  }
  return operator;
}

function isOperator(s: Operator | string): s is Operator {
  return s === "+" || s === "-" || s === "*" || s === "/";
}

function computeOperation(leftOperand: number, rightOperand: number, operator: Operator): number {
  switch (operator) {
    case "+":
      return leftOperand + rightOperand;
    case "-":
      return leftOperand - rightOperand;
    case "*":
      return leftOperand * rightOperand;
    case "/":
      return leftOperand / rightOperand;
    default:
      throw new Error(makeOperatorErrorMessage(operator));
  }
}

function makeOperandErrorMessage(received: string): string {
  return `Error: a number is expected, but received '${received}'`;
}

function makeOperatorErrorMessage(received: string): string {
  return `Error: an operator is expected, but received '${received}'. Allowed operators are: +, -, * and /`;
}
