import DangerButton from "../../components/buttons/danger-button";
import PrimaryButton from "../../components/buttons/primary-button";
import SecondayButton from "../../components/buttons/secondary-button";

interface IButtonFactoryProps {
  variant: "primary" | "secondary" | "danger";
  label?: string;
}
const ButtonFactory = ({ variant, label }: IButtonFactoryProps) => {
  switch (variant) {
    case "primary":
      return <PrimaryButton label={label} />;
    case "secondary":
      return <SecondayButton label={label} />;
    case "danger":
      return <DangerButton label={label} />;
    default:
      return <p>Unknown Button variant</p>;
  }
};

export default ButtonFactory;
