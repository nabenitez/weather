import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchCities = async () => {
  const response = await axios.get("/search");
  return response.data; // Returns parsed CSV rows as an array of objects
};

export const useCitiesData = () => {
  return useQuery({
    queryKey: ["cities"],
    queryFn: fetchCities,
    // caching results
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
};
