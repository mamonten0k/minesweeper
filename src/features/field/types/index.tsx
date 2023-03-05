export enum GAME_STATE {
  "IDLE" = "IDLE",
  "WIN" = "WIN",
  "ONGOING" = "ONGOING",
  "LOST" = "LOST",
}

export type State = {
  size: number;
  totalBombs: number;
  map: number[][];
  score: number;
  status: GAME_STATE;
  pressing: boolean;
};
