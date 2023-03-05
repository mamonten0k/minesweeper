import { RootState } from "../index";

export const selectGameModule = (state: RootState) => state.game;
export const selectGameField = (state: RootState) => selectGameModule(state).map;
export const selectGameStateField = (state: RootState) => selectGameModule(state).map;

type CellPos = {
  row: number;
  col: number;
};

export const selectGameCellState = (state: RootState, { row, col }: CellPos) =>
  selectGameModule(state).stateMap[row][col];
