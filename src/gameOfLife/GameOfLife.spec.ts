import { Grid, Coordinates, shouldLive, nextGeneration } from "./GameOfLife";

describe("Test of the test framework", function() {
  it.skip("Should fail", function() {
    expect(0).toEqual(1);
  });

  it("Should pass", function() {
    expect(0).toEqual(0);
  });
});

describe("3 x 3 grid, computation for the cell at the middle of the grid", function() {
  it("A live cell with 0 live neighbors should die", function() {
    // GIVEN
    const grid: Grid = [[" ", " ", " "], [" ", "●", " "], [" ", " ", " "]];
    const coordinates: Coordinates = {
      line: 1,
      column: 1
    };

    // WHEN
    const actual: boolean = shouldLive(grid, coordinates);

    // THEN
    expect(actual).toEqual(false);
  });

  it("A live cell with 1 live neighbor should die", function() {
    // GIVEN
    const grid: Grid = [[" ", " ", " "], ["●", "●", " "], [" ", " ", " "]];
    const coordinates: Coordinates = {
      line: 1,
      column: 1
    };

    // WHEN
    const actual: boolean = shouldLive(grid, coordinates);

    // THEN
    expect(actual).toEqual(false);
  });

  it("A live cell with 2 live neighbors should live", function() {
    // GIVEN
    const grid: Grid = [[" ", " ", " "], ["●", "●", "●"], [" ", " ", " "]];
    const coordinates: Coordinates = {
      line: 1,
      column: 1
    };

    // WHEN
    const actual: boolean = shouldLive(grid, coordinates);

    // THEN
    expect(actual).toEqual(true);
  });

  it("A live cell with 2 live neighbors should live", function() {
    // GIVEN
    const grid: Grid = [[" ", " ", "●"], ["●", "●", " "], [" ", " ", " "]];
    const coordinates: Coordinates = {
      line: 1,
      column: 1
    };

    // WHEN
    const actual: boolean = shouldLive(grid, coordinates);

    // THEN
    expect(actual).toEqual(true);
  });

  it("A live cell with 3 live neighbors should live", function() {
    // GIVEN
    const grid: Grid = [[" ", " ", "●"], ["●", "●", " "], ["●", " ", " "]];
    const coordinates: Coordinates = {
      line: 1,
      column: 1
    };

    // WHEN
    const actual: boolean = shouldLive(grid, coordinates);

    // THEN
    expect(actual).toEqual(true);
  });

  it("A live cell with 4 live neighbors should die", function() {
    // GIVEN
    const grid: Grid = [[" ", " ", "●"], ["●", "●", " "], ["●", "●", " "]];
    const coordinates: Coordinates = {
      line: 1,
      column: 1
    };

    // WHEN
    const actual: boolean = shouldLive(grid, coordinates);

    // THEN
    expect(actual).toEqual(false);
  });

  it("A dead cell with 2 live neighbors should stay dead", function() {
    // GIVEN
    const grid: Grid = [[" ", " ", "●"], ["●", " ", " "], [" ", " ", " "]];
    const coordinates: Coordinates = {
      line: 1,
      column: 1
    };

    // WHEN
    const actual: boolean = shouldLive(grid, coordinates);

    // THEN
    expect(actual).toEqual(false);
  });

  it("A dead cell with 3 live neighbors should live", function() {
    // GIVEN
    const grid: Grid = [[" ", "●", "●"], ["●", " ", " "], [" ", " ", " "]];
    const coordinates: Coordinates = {
      line: 1,
      column: 1
    };

    // WHEN
    const actual: boolean = shouldLive(grid, coordinates);

    // THEN
    expect(actual).toEqual(true);
  });

  it("A dead cell with 4 live neighbors should stay dead", function() {
    // GIVEN
    const grid: Grid = [[" ", "●", "●"], ["●", " ", " "], [" ", " ", "●"]];
    const coordinates: Coordinates = {
      line: 1,
      column: 1
    };

    // WHEN
    const actual: boolean = shouldLive(grid, coordinates);

    // THEN
    expect(actual).toEqual(false);
  });
});

describe("Computation for whichever cell of the grid", function() {
  it("Should handle cells located at the border of the grid", function() {
    // GIVEN
    const grid: Grid = [["●", " ", " "], [" ", "●", "●"], [" ", " ", " "]];
    const coordinates: Coordinates = {
      line: 0,
      column: 1
    };

    // WHEN
    const actual: boolean = shouldLive(grid, coordinates);

    // THEN
    expect(actual).toEqual(true);
  });
});

describe("Computation for all cells of the grid", function() {
  it("Should handle cells located at the border of the grid", function() {
    // GIVEN
    const grid: Grid = [[" ", " ", " "], ["●", "●", "●"], [" ", " ", " "]];

    // WHEN
    const actual: Grid = nextGeneration(grid);

    // THEN
    const expected: Grid = [[" ", "●", " "], [" ", "●", " "], [" ", "●", " "]];
    expect(actual.toString()).toEqual(expected.toString());
  });
});

describe("Handle invalid grids", function() {
  it("Should handle grids with no row", function() {
    const grid: Grid = [];
    expect(() => nextGeneration(grid)).toThrowError(
      "Grid must have at least 1 line of cells, but got grid with 0 line"
    );
  });

  it("Should handle grids with no column", function() {
    const grid: Grid = [[], [], []];
    expect(() => nextGeneration(grid)).toThrowError(
      "Grid must have at least 1 column of cells, but got grid with 0 column"
    );
  });
});
