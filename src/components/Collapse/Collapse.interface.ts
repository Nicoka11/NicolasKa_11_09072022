import { ReactNode } from "react";

export interface CollapseProps {
  title: string;
  content: string | ReactNode;
  defaultOpen?: boolean;
}
