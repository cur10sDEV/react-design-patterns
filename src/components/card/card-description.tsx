import { type ReactNode } from "react";

interface ICardDescriptionProps {
  children: ReactNode;
}

const CardDescription = ({ children }: ICardDescriptionProps) => {
  return <p className="text-justify">{children}</p>;
};

export default CardDescription;
