import type { ReactNode } from "react";

interface ISplitScreenProps {
  children: ReactNode[];
  leftWidth?: number;
  rightWidth?: number;
}
const SplitScreen = ({
  children,
  leftWidth = 50,
  rightWidth = 50,
}: ISplitScreenProps) => {
  const [left, right] = children;

  return (
    <section className="flex flex-1 items-center w-full h-full">
      <div className="h-full" style={{ width: `${leftWidth}%` }}>
        {left}
      </div>
      <div className="h-full" style={{ width: `${rightWidth}%` }}>
        {right}
      </div>
    </section>
  );
};

export default SplitScreen;
