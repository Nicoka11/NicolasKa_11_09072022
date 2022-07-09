import { ReactNode } from "react";

export interface HeroProps {
  title?: string | ReactNode;
  image: {
    src: string;
    alt: string;
  };
}
