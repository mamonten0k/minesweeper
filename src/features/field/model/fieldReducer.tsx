import {
  generateMatrix,
  prevCol,
  prevRow,
  randomNumber,
} from "../../../shared/lib/helpers";

const updateNeighbours = (posX: number, posY: number, map: number[][], size = 16) => {
  if (posX > size - 1 || posX > size - 1) return;

  const boundaryX = Math.min(posX + 2, size - Math.floor((posX + 2) / size - 1));
  const boundaryY = Math.min(posY + 2, size - Math.floor((posY + 2) / size - 1));

  let x = prevCol(posX);
  let y = prevRow(posY);

  for (y; y < boundaryY; y++) {
    for (x; x < boundaryX; x++) {
      if (map[y][x] === -1) continue;
      map[y][x]++;
    }

    x = prevCol(posX);
  }
};

export const generateMap = (size: number, bombs: number): number[][] => {
  const map = generateMatrix(size);
  const bombsMap = [];

  let posX;
  let posY;

  // Расположить бомбы по карте
  for (let i = 0; i < bombs; i++) {
    do {
      posX = randomNumber(0, size - 1);
      posY = randomNumber(0, size - 1);
    } while (map[posY][posX] === -1);

    map[posY][posX] = -1;
    bombsMap.push([posY, posX]);
  }

  // Инкрементируем поля соседних с бомбами клеток на 1
  for ([posY, posX] of Object.values(bombsMap)) {
    updateNeighbours(posX, posY, map);
  }

  return map;
};
