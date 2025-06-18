interface IDangerButtonProps {
  label?: string;
}

const DangerButton = ({ label = "Click Me" }: IDangerButtonProps) => {
  return (
    <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300 cursor-pointer">
      {label}
    </button>
  );
};

export default DangerButton;
