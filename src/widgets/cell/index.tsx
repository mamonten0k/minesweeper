import { FC, useCallback, useMemo, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UICell } from "../../entities";
import { RootState } from "../../shared";
import { selectGameCellState } from "../../shared/lib/store/game/game.selectors";
import { gameActions } from "../../shared/lib/store/game/game.slice";

import styles from "./index.module.scss";

type FieldCellProps = {
  value: number;
  row: number;
  col: number;
};

export const FieldCell: FC<FieldCellProps> = ({ value, row, col }) => {
  const cellState = useSelector((state: RootState) =>
    selectGameCellState(state, { row, col }),
  );
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(gameActions.revealCell({ row, col }));

    if (value === -1) {
      dispatch(gameActions.finishGame());
    }
  }, []);

  const handleToggle = useCallback((e: MouseEvent) => {
    e.preventDefault();
    dispatch(gameActions.updateCell({ row, col }));
  }, []);

  const styled = useMemo(() => {
    return [
      cellState === 9 && styles.visible,
      cellState === 9 && styles[`visible_${value}`],
      cellState === 1 && styles.flagged,
      cellState === 2 && styles.doubted,
      cellState === 9 && value === -1 && styles.bomb,
      cellState === 10 && value === -1 && styles.bomb_cleared,
      cellState === 11 && value === -1 && styles.bomb_uncovered,
    ].filter(Boolean);
  }, [cellState]);

  return (
    <UICell styled={styled.join(" ")} onClick={handleClick} onToggle={handleToggle} />
  );
};
