interface IPrimaryButtonProps {
  label?: string;
}

const PrimaryButton = ({ label = "Click Me" }: IPrimaryButtonProps) => {
  return (
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer">
      {label}
    </button>
  );
};

export default PrimaryButton;
