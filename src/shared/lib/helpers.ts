export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const rangeArray = (size: number): number[] => {
  return Array.from(Array(size).keys());
};

export const generateMatrix = (size: number): number[][] => {
  return Array.from(Array(size)).map(() => Array(size).fill(0));
};

export const generateBombsNumber = () => {
  return Math.round((256 * randomNumber(14, 20)) / 100);
};

export const prevRow = (row: number) => {
  return row > 0 ? row - 1 : row;
};

export const prevCol = (col: number) => {
  return col > 0 ? col - 1 : col;
};

export const getAllNeighbours = (
  y: number,
  x: number,
  map: number[][],
): Array<Array<number>> => {
  const res = [];

  for (let curY = y - 1; curY < y + 2; curY++) {
    if (curY < 0 || curY >= 16) continue;
    for (let curX = x - 1; curX < x + 2; curX++) {
      if (curX < 0 || curX >= 16) continue;
      if (curX === x && curY === y) continue;
      res.push([curY, curX]);
    }
  }

  return res;
};

export const getNeighbours = (
  y: number,
  x: number,
  map: number[][],
  tmpMap = generateMatrix(16),
) => {
  let positions: any = [[0, 1]];

  if (tmpMap[y][x] === 1 || map[y][x] !== 0) return;
  tmpMap[y][x] = 1;

  const nb = getAllNeighbours(y, x, map).filter((cell) => map[cell[0]][cell[1]] !== -1);

  nb.forEach((cell) => {
    if (tmpMap[cell[0]][cell[1]] !== 1) {
      tmpMap[cell[0]][cell[1]] = 1;
      getNeighbours(cell[0], cell[1], map, tmpMap);
    }
  });

  console.log(tmpMap);

  return positions;
};
