import PostItem from "./post-item";
import PostsGrid from "./posts-grid";

const Posts = ({ posts }: { posts: any[] }) => {
  return (
    <PostsGrid>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </PostsGrid>
  );
};

export default Posts;
