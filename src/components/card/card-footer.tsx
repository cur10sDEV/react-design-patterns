import { type ReactNode } from "react";

interface ICardFooterProps {
  children: ReactNode;
}

const CardFooter = ({ children }: ICardFooterProps) => {
  return <p className="font-light text-sm">{children}</p>;
};

export default CardFooter;
