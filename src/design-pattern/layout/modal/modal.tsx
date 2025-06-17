import { useState, type ReactNode } from "react";

interface IModalProps {
  children: ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow cursor-pointer"
        onClick={() => setShow(true)}
      >
        Show Modal
      </button>
      {show && (
        <div
          className="fixed top-0 left-0 h-screen w-screen bg-black/30 flex flex-col justify-center items-center overflow-auto z-50"
          onClick={() => setShow(false)}
        >
          <div
            className="bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
