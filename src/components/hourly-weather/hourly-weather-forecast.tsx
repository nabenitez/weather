"use client";

import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { HourlyWeatherCard } from "./hourly-weather-card";

type DailyWeatherData = {
  time: string;
  temperature: number;
  pop: number;
  icon: string;
};

// TODO: move to service layer
const formatInput = (data: any): DailyWeatherData[] => {
  return data.map((item: any) => ({
    time: new Date(item.dt * 1000).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
    temperature: Number(item.temp.toFixed(0)),
    pop: (item.pop * 100).toFixed(0),
    icon: item.weather[0]?.icon,
  }));
};

export const HourlyWeatherForecast: React.FC<{
  data: DailyWeatherData[];
}> = ({ data }) => {
  const locales = { title: "Next hours" };
  const formattedInput = formatInput(data);

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
        sx={{ padding: 2, borderBottom: "1px solid #e0e0e0", mb: 2 }}
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
        {formattedInput.map((hourlyWeather, index) => (
          <HourlyWeatherCard
            key={index}
            time={hourlyWeather.time}
            temperature={hourlyWeather.temperature}
            pop={hourlyWeather.pop}
            icon={hourlyWeather.icon}
          />
        ))}
      </Stack>
    </Box>
  );
};
