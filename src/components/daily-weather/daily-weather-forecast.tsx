import React from "react";
import { Box, Typography } from "@mui/material";
import { DailyWeatherCard } from "./daily-weather-card";

type DailyWeatherData = {
  day: string;
  date: string;
  description: string;
  highTemp: number;
  lowTemp: number;
  icon: string;
};

interface DailyWeatherForecastProps {
  data?: DailyWeatherData[];
}

const weatherData: DailyWeatherData[] = [
  {
    day: "Fri",
    date: "Nov 1",
    description: "Clear throughout the day.",
    highTemp: 27,
    lowTemp: 11,
    icon: "04n",
  },
  {
    day: "Sat",
    date: "Nov 2",
    description: "Clear throughout the day.",
    highTemp: 28,
    lowTemp: 13,
    icon: "04n",
  },
  {
    day: "Sun",
    date: "Nov 3",
    description: "Clear throughout the day.",
    highTemp: 27,
    lowTemp: 14,
    icon: "04n",
  },
  {
    day: "Mon",
    date: "Nov 4",
    description: "Clear throughout the day.",
    highTemp: 26,
    lowTemp: 11,
    icon: "04n",
  },
  {
    day: "Mon",
    date: "Nov 4",
    description: "Clear throughout the day.",
    highTemp: 26,
    lowTemp: 11,
    icon: "04n",
  },
];

export const DailyWeatherForecast: React.FC<DailyWeatherForecastProps> = ({
  data = weatherData,
}) => {
  const locales = { title: "Next 5 days" };

  return (
    <Box
      sx={{
        width: "100%",
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
      {data.map((data, index) => (
        <DailyWeatherCard
          key={index}
          day={data.day}
          date={data.date}
          description={data.description}
          highTemp={data.highTemp}
          lowTemp={data.lowTemp}
          icon={data.icon}
        />
      ))}
    </Box>
  );
};
