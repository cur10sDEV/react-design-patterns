const PostItem = ({ post }: { post: any }) => {
  return (
    <div className="flex-1/4 shadow-md border cursor-pointer p-4 rounded-md hover:scale-95 transform-transition duration-100">
      <h2>{post.title}</h2>
      <h2>{post.body}</h2>
    </div>
  );
};

export default PostItem;
