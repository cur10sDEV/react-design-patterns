import { useEffect, useState, type ReactNode } from "react";

interface IMouseTrackerProps {
  render: (props: any) => ReactNode;
}

// this allows two way communication
// by passing render method you pass data to parent
// by passing props to render method you pass data to child
const MouseTracker = ({ render }: IMouseTrackerProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  function handleMouseMove(this: Window, e: MouseEvent) {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return render(position);
};

export default MouseTracker;
