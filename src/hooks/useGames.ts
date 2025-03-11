import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
export interface Game {
  id: number;
  name: string;
  background_image: string
}
interface FetchGame {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    apiClient
      .get<FetchGame>("/games", { signal })
      .then((res) => {
        setGames(res.data.results);
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
  return { games, error, isLoading };
};

export default useGames;
