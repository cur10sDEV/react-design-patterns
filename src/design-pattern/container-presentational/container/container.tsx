import { useFetch } from "../../../hooks/useFetch";
import Posts from "../presentational/posts";

export const Container = () => {
  const { data, loading, error } = useFetch<any>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (loading) return <h1>Loading...</h1>;
  if (error || !data) return null;

  return <Posts posts={data} />;
};
