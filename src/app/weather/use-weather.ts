import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

const fetchCityCoordinates = async (cityName: string) => {
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
  const response = await axios.get(geoUrl);
  const data = response.data;

  if (data.length === 0) {
    throw new Error("City not found");
  }

  const { lat, lon } = data.shift();
  return { lat, lon };
};

const fetchWeatherData = async ({ lat, lon }: { lat: number; lon: number }) => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const response = await axios.get(weatherUrl);
  return response.data;
};

// TODO: add parser
const fetchWeatherByCity = async (cityName: string) => {
  const { lat, lon } = await fetchCityCoordinates(cityName);

  const weatherData = await fetchWeatherData({ lat, lon });

  return weatherData;
};

export const useWeather = (selectedCityName: string) =>
  useQuery({
    queryKey: ["weatherByCity", selectedCityName],
    queryFn: () => fetchWeatherByCity(selectedCityName),
    enabled: !!selectedCityName,
    retry: false,
  });
