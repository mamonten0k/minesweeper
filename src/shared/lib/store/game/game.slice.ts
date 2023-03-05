import { createSlice } from "@reduxjs/toolkit";
import { generateMap } from "../../../../features";
import { GAME_STATE } from "../../../../features/field/types";
import {
  generateBombsNumber,
  generateMatrix,
  getAllNeighbours,
  getNeighbours,
} from "../../helpers";

export interface GameState {
  size: number;
  totalBombs: number;
  map: number[][];
  stateMap: number[][];
  score: number;
  status: GAME_STATE | null;
}

const initialState: GameState = {
  size: 16,
  totalBombs: 0,
  map: [[]],
  stateMap: [[]],
  score: 0,
  status: GAME_STATE.IDLE,
};

const AllowToggle = new Set([-1, 0, 1, 2]);

const AllowReveal = new Set([0, 2]);

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    initiateGame: (state) => {
      state.totalBombs = generateBombsNumber();
      state.map = generateMap(state.size, state.totalBombs);
      state.stateMap = generateMatrix(state.size);
      state.status = GAME_STATE.IDLE;
    },
    revealCell: (state, action) => {
      let { row, col } = action.payload;
      if (state.status === GAME_STATE.WIN || state.status === GAME_STATE.LOST) return;
      if (!AllowReveal.has(state.stateMap[row][col])) return;

      state.stateMap[row][col] = 9;
      const neighbours = getNeighbours(row, col, state.map);
    },
    updateCell: (state, action) => {
      const { row, col } = action.payload;
      if (!AllowToggle.has(state.stateMap[row][col])) return;
      state.stateMap[row][col] = (state.stateMap[row][col] + 1) % 3;
    },
    finishGame: (state) => {
      for (let row = 0; row < state.size; row++) {
        for (let col = 0; col < state.size; col++) {
          if (state.map[row][col] === -1 && state.stateMap[row][col] === 1) {
            state.stateMap[row][col] = 10;
          } else if (state.map[row][col] === -1 && state.stateMap[row][col] !== 9) {
            state.stateMap[row][col] = 11;
          } else {
            state.stateMap[row][col] = 9;
          }
        }
      }
      state.status = GAME_STATE.LOST;
    },
  },
});

export const gameActions = gameSlice.actions;
