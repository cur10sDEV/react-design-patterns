import { type ReactNode } from "react";

const PostsGrid = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-wrap m-4 gap-4">{children}</div>;
};

export default PostsGrid;
