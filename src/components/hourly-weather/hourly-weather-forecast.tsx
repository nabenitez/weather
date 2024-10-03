"use client";

import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { HourlyWeatherCard } from "./hourly-weather-card";

type DailyWeatherData = {
  dt: number;
  temp: number;
  pop: number;
  icon: string;
  weather: { icon: string }[];
};

const weatherData: DailyWeatherData[] = [
  {
    dt: 1727924400,
    temp: 24.57,
    icon: "04n",
    weather: [
      {
        icon: "04n",
      },
    ],
    pop: 0,
  },
];

export const HourlyWeatherForecast: React.FC<{
  data?: DailyWeatherData[];
}> = ({ data = weatherData }) => {
  const locales = { title: "Next hours" };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: 1,
        p: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{ padding: 2, borderBottom: "1px solid #e0e0e0" }}
      >
        {locales.title}
      </Typography>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem variant="middle" />}
        spacing={2}
        sx={{
          overflowX: "auto",
        }}
      >
        {data.map((data, index) => (
          <HourlyWeatherCard
            key={index}
            time={new Date(data.dt).toLocaleTimeString("en-US", timeOptions)}
            temperature={Number(data.temp.toFixed(0))}
            pop={parseInt(data.pop.toFixed(0)) || 0}
            icon={data.weather[0]?.icon}
          />
        ))}
      </Stack>
    </Box>
  );
};
