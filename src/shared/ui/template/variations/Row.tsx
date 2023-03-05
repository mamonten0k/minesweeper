import { FC, ReactNode } from "react";
import { CommonStyledProps } from "../../../config";

import styles from "../index.module.scss";

type RowProps = CommonStyledProps & { children: ReactNode };

export const Row: FC<RowProps> = ({ children, styled = "" }) => {
  return <div className={`${styles.flex} ${styled}`}>{children}</div>;
};
