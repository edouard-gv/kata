type Char = " " | "*";

export function diamond(width: number): Char[][] {
  const makeRow = buildMakeRowFunction(width);
  const emptyArray = Array(width).fill(undefined);
  return emptyArray.map((_, row: number) => makeRow(row));
}

export function buildMakeRowFunction(width: number) {
  const isWithinDiamond = buildIsWithinDiamondFunction(width);
  const emptyArray = Array(width).fill(undefined);
  return function makeRow(row: number): Char[] {
    return emptyArray.map((_, column: number) => (isWithinDiamond(row, column) ? "*" : " "));
  };
}

function buildIsWithinDiamondFunction(width: number) {
  const dimension: number = (width + 1) / 2;
  return function isWithinDiamond(row: number, column: number): boolean {
    if (row < dimension) {
      return column >= dimension - row - 1 && column < dimension + row;
    }
    return column > row - dimension && column < dimension + width - row - 1;
  };
}
