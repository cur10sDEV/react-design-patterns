import { type ReactNode } from "react";
import CardDescription from "../../components/card/card-description";
import CardFooter from "../../components/card/card-footer";
import CardTitle from "../../components/card/card-title";

interface ICardProps {
  children: ReactNode;
}

const Card = ({ children }: ICardProps) => {
  return (
    <div className="w-[400px] p-4 bg-amber-50 rounded-md shadow-md flex flex-col justify-center items-start gap-4">
      {children}
    </div>
  );
};

Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Footer = CardFooter;

export default Card;
