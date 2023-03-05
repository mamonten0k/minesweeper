import { useState, MouseEvent } from "react";

import styles from "../index.module.scss";

const CELL_STATES = {
  DEFAULT: 0,
  FLAGGED: 1,
  QUESTIONED: 2,
};

export const useCell = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cellState, setCellState] = useState(CELL_STATES.DEFAULT);

  const onClick = () => {
    setIsVisible(cellState === CELL_STATES.DEFAULT);
  };

  const onContextClick = (e: MouseEvent) => {
    e.preventDefault();
    console.log(cellState, isVisible);
    setCellState((oldState) => (!isVisible ? ++oldState % 3 : oldState));
  };

  const styled = [
    isVisible && styles.visible,
    !isVisible && cellState === CELL_STATES.FLAGGED && styles.flagged,
    !isVisible && cellState === CELL_STATES.QUESTIONED && styles.questioned,
  ]
    .filter(Boolean)
    .join(" ");

  return {
    styled,
    onClick,
    onContextClick,
  };
};
