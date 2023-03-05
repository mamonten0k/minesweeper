import { FC, MouseEvent } from "react";
import { CommonStyledProps } from "../../../shared/config";

import styles from "../index.module.scss";

type UICellProps = CommonStyledProps & {
  styled: string;
  onClick: () => void;
  onToggle: (e: MouseEvent) => void;
};

export const UICell: FC<UICellProps> = ({ styled, onClick, onToggle }) => {
  return (
    <button
      type="button"
      aria-label="field cell"
      onClick={onClick}
      onContextMenu={onToggle}
      className={`${styles.base} ${styled}`}
    />
  );
};
