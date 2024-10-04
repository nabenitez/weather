"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Box, Skeleton } from "@mui/material";
import { City } from "@/types";
import { useWeather } from "./use-weather";
import { Tabs } from "@/components/tabs";
import { HourlyWeatherForecast } from "@/components/hourly-weather";
import { DailyWeatherForecast } from "@/components/daily-weather";

interface WeatherProps {
  setLastUpdatedAt: Dispatch<SetStateAction<Date | null>>;
}

export const Weather: React.FC<WeatherProps> = ({ setLastUpdatedAt }) => {
  const [currentCityId, setCurrentCityId] = useState(0);
  const [currentCityName, setCurrentCityName] = useState("Rio de Janeiro");
  const { data, isPending, dataUpdatedAt } = useWeather(currentCityName);

  useEffect(() => {
    if (dataUpdatedAt) return setLastUpdatedAt(new Date(dataUpdatedAt));
  }, [dataUpdatedAt, setLastUpdatedAt]);

  const cities: Record<number, City> = {
    0: {
      id: 0,
      name: "Rio de Janeiro",
    },
    1: {
      id: 1,
      name: "Beijing",
    },
    2: {
      id: 2,
      name: "Los Angeles",
    },
  };

  const handleChange = (_: any, newValue: number) => {
    console.log("Selected Tab:", newValue);
    console.log("Selected City:", cities[newValue]);

    setCurrentCityId(newValue);
    setCurrentCityName(cities[newValue].name);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        gap={3}
      >
        <Tabs cities={cities} value={currentCityId} onChange={handleChange} />
        {isPending && <Skeleton variant="rectangular" height="600px" />}
        {!isPending && (
          <>
            <HourlyWeatherForecast data={data.hourly} />
            <DailyWeatherForecast data={data.daily} />
          </>
        )}
      </Box>
    </>
  );
};
