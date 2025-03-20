import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenre {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    apiClient
      .get<FetchGenre>("/genres", { signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        {
          if (err instanceof CanceledError) return;
          setError(err.message);
        }
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenre;
