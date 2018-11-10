type Operator = "+" | "-" | "*" | "/";

const UNKNOWN_OPERATOR_ERROR_MESSAGE = "Unknown operator";

export function rpn(instruction: string): number {
  const { left, rightOperand, operator, leftIsFinal } = splitInstruction(instruction);
  const leftOperand: number = leftIsFinal ? parseInt(left) : rpn(left);
  return computeOperation(leftOperand, rightOperand, operator);
}

function splitInstruction(
  instruction: string
): { left: string; rightOperand: number; operator: Operator; leftIsFinal: boolean } {
  const [operator, right, ...left]: string[] = instruction.split(" ").reverse();
  return {
    left: left
      .slice()
      .reverse()
      .join(" "),
    rightOperand: parseInt(right),
    operator: operator as Operator,
    leftIsFinal: left.length === 1
  };
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
      throw new Error(UNKNOWN_OPERATOR_ERROR_MESSAGE);
  }
}
