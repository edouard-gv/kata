// J'aurais mis deux constantes, X et O par exemple, pour éviter d'aoir à taper des guillemets, et pouvoir changer
// l'implémentation par un espace ou un rond de la représentation vivant / mort.

// Ce n'est pas une cellule, mais l'état d'une cellule => renommer en CellState ?
export type Cell = " " | "●";

export type Grid = Cell[][];

//Et c'est plutôt ça la cellule ?
export interface Coordinates {
  x: number;
  y: number;
}

export function nextGeneration(grid: Grid): Grid {
  const { width, height } = computeGridDimensions(grid);
  const nextGrid: Grid = [];
  for (let line = 0; line < height; line++) {
    const row: Cell[] = [];
    for (let column = 0; column < width; column++) {
      row.push(shouldLive(grid, { x: line, y: column }) ? "●" : " ");
    }
    nextGrid.push(row);
  }
  return nextGrid;
}

export function shouldLive(grid: Grid, coordinates: Coordinates): boolean {
  const numberOfAliveNeighbours: number = getNeighboursCoordinates(coordinates)
    .filter(isInsideTheGrid(grid))
    .map(getCell(grid))
    .filter(isCellAlive)
    .length;

  if (isCellAlive(getCell(grid)(coordinates))) {
    return numberOfAliveNeighbours === 2 || numberOfAliveNeighbours === 3;
  }
  return numberOfAliveNeighbours === 3;
}

function getNeighboursCoordinates({x, y}: Coordinates): Coordinates[] {
  return [{x: x-1, y: y-1}, {x: x-1, y: y  }, {x: x-1, y: y+1},
          {x: x  , y: y-1}  /*    cell    */, {x: x  , y: y+1},
          {x: x+1, y: y-1}, {x: x+1, y: y  }, {x: x+1, y: y+1}];
}

function isInsideTheGrid(grid: Grid) {
  const { width, height } = computeGridDimensions(grid);
  return function({ x, y }: Coordinates): boolean {
    return x > -1 && x < height && y > -1 && y < width;
  };
}

function getCell(grid: Grid) {
  return function({ x, y }: Coordinates): Cell {
    return grid[x][y];
  }
}

function isCellAlive(cell: Cell) {
    return cell === "●";
}

function computeGridDimensions(grid: Grid): { width: number; height: number } {
  const height: number = grid.length;
  if (height < 1) {
    throw new Error(`Grid must have at least 1 line of cells, but got grid with 0 line`);
  }
  const width: number = grid[0].length;
  if (width < 1) {
    throw new Error(`Grid must have at least 1 column of cells, but got grid with 0 column`);
  }
  return { width, height };
}
