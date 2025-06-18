interface ISecondaryButtonProps {
  label?: string;
}

const SecondayButton = ({ label = "Click Me" }: ISecondaryButtonProps) => {
  return (
    <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded cursor-pointer hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
      {label}
    </button>
  );
};

export default SecondayButton;
