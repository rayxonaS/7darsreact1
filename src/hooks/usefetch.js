import { useEffect, useState } from "react";
import { axiosInstance } from "../utils";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await axiosInstance(url);
        setData(req);
      } catch (error) {
        setError(error);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [url]);
  return { data, isPending, error };
}
