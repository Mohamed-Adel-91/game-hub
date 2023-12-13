import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count : number;
  next?: string;
  previous?: string;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
      // Cancelation Fetch data 
      const controller = new AbortController();
      // Fetch games data on component mount.
      setLoading(true);
      apiClient
          .get<FetchGenresResponse>('/genres',{signal: controller.signal})
          .then(res => {
            setGenres(res.data.results);
              setLoading(false);
          })
          .catch(err => {
              if (err instanceof CanceledError) return;
              setError(err.message)
              setLoading(false);
          });
      return () => controller.abort();
  },[])
  return {genres,error,isLoading};
};

export default useGenres;