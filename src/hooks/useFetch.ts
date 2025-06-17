import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const contoller = new AbortController();

    const fectchUser = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, {
          signal: contoller.signal,
        });

        if (!res.ok) throw new Error("Failed to fetch resources");

        const data = (await res.json()) as T;
        setData(data);
      } catch (error) {
        // don't reset data if fetch is aborted
        if (error instanceof Error && error.name === "AbortError") {
          console.error("Fetch Aborted!");
          return;
        }

        console.error("Fetch Error", error);
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fectchUser();

    return () => contoller.abort();
  }, [url]);

  return { data, loading, error };
};
