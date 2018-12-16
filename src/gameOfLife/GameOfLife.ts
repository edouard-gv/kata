export type Cell = " " | "●";

export type Grid = Cell[][];

export interface Coordinates {
  line: number;
  column: number;
}

interface Direction {
  deltaLine: -1 | 0 | 1;
  deltaColumn: -1 | 0 | 1;
}

export function nextGeneration(grid: Grid): Grid {
  const { width, height } = computeGridDimensions(grid);
  const nextGrid: Grid = [];
  for (let line = 0; line < height; line++) {
    const row: Cell[] = [];
    for (let column = 0; column < width; column++) {
      row.push(shouldLive(grid, { line, column }) ? "●" : " ");
    }
    nextGrid.push(row);
  }
  return nextGrid;
}

export function shouldLive(grid: Grid, coordinates: Coordinates): boolean {
  const numberOfAliveNeighbours: number = DIRECTIONS.map(computeNeighbourCoordinates(coordinates))
    .filter(isInsideTheGrid(grid))
    .map(isAlive(grid))
    .reduce(countAliveNeighbours, 0);

  if (isAlive(grid)(coordinates)) {
    return numberOfAliveNeighbours === 2 || numberOfAliveNeighbours === 3;
  }
  return numberOfAliveNeighbours === 3;
}

const DIRECTIONS: Direction[] = [
  {
    deltaLine: -1,
    deltaColumn: 0
  },
  {
    deltaLine: -1,
    deltaColumn: 1
  },
  {
    deltaLine: 0,
    deltaColumn: 1
  },
  {
    deltaLine: 1,
    deltaColumn: 1
  },
  {
    deltaLine: 1,
    deltaColumn: 0
  },
  {
    deltaLine: 1,
    deltaColumn: -1
  },
  {
    deltaLine: 0,
    deltaColumn: -1
  },
  {
    deltaLine: -1,
    deltaColumn: -1
  }
];

function computeNeighbourCoordinates({ line, column }: Coordinates) {
  return function({ deltaLine, deltaColumn }: Direction): Coordinates {
    return {
      line: line + deltaLine,
      column: column + deltaColumn
    };
  };
}

function isInsideTheGrid(grid: Grid) {
  const { width, height } = computeGridDimensions(grid);
  return function({ line, column }: Coordinates): boolean {
    return line > -1 && line < height && column > -1 && column < width;
  };
}

function isAlive(grid: Grid) {
  return function({ line, column }: Coordinates): boolean {
    return grid[line][column] === "●";
  };
}

function countAliveNeighbours(numberOfAliveNeighbours: number, neighbourIsAlive: boolean): number {
  return neighbourIsAlive ? numberOfAliveNeighbours + 1 : numberOfAliveNeighbours;
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