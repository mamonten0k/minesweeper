import { FC, ReactNode } from "react";
import { Row } from "./variations";

type TemplateExtensions = {
  Row: typeof Row;
};

type TemplateProps = { children: ReactNode };

export const Template: FC<TemplateProps> & TemplateExtensions = ({ children }) => {
  return <>{children}</>;
};

Template.Row = Row;
