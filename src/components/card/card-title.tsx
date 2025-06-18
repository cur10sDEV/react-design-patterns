import { type ReactNode } from "react";

interface ICardTitleProps {
  children: ReactNode;
}

const CardTitle = ({ children }: ICardTitleProps) => {
  return <h1 className="text-2xl font-bold">{children}</h1>;
};

export default CardTitle;
