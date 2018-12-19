export type HighPrecedenceOperator = "*" | "/";
export type LowPrecedenceOperator = "+" | "-";
export type Operator = HighPrecedenceOperator | LowPrecedenceOperator;

export function isOperator(s: any): s is Operator {
  return isHighPrecedenceOperator(s) || isLowPrecedenceOperator(s);
}

export function isHighPrecedenceOperator(s: any): s is HighPrecedenceOperator {
  return s === "*" || s === "/";
}

export function isLowPrecedenceOperator(s: any): s is LowPrecedenceOperator {
  return s === "+" || s === "-";
}

export type Operand = number;

export type Instruction = Array<Operator | Operand>;
export type LowPrecedenceInstruction = Array<LowPrecedenceOperator | Operand>;

export interface Operation<T extends Operator> {
  leftOperand: Operand;
  operator?: T;
  rightOperand?: Operand;
}

export function computeOperation({ operator, leftOperand, rightOperand }: Operation<Operator>): number {
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
      throw new Error(`Expected operator but received ${operator}`);
  }
}
