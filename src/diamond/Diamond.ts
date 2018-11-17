type Char = " " | "*";

export function diamond(width: number): Char[][] {
  const dimension: number = (width + 1) / 2;
  const makeRow = buildMakeRowFunction(dimension);
  const emptyArray = Array(dimension).fill(undefined);
  const topHalfDiamond: Char[][] = emptyArray.map((_, row: number) => makeRow(row));
  return expandWithSymetricalArray(topHalfDiamond);
}

export function buildMakeRowFunction(dimension: number) {
  const emptyArray = Array(dimension).fill(undefined);
  return function makeRow(row: number): Char[] {
    const leftHalfRow: Char[] = emptyArray.map((_, column: number) => (column >= dimension - row - 1 ? "*" : " "));
    return expandWithSymetricalArray(leftHalfRow);
  };
}

function expandWithSymetricalArray<T>(array: T[]): T[] {
  const symetricalArray: T[] = array.slice().reverse();
  symetricalArray.shift();
  return [...array, ...symetricalArray];
}
