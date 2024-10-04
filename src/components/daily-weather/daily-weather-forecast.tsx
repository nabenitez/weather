import React from "react";
import { Box, Typography } from "@mui/material";
import { DailyWeatherCard } from "./daily-weather-card";

type DailyWeatherData = {
  date: number;
  description: string;
  highTemp: number;
  lowTemp: number;
  icon: string;
};

type DailyWeatherForecast = DailyWeatherData[];

// TODO: Move to service layer
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatInput = (dailyData: any): DailyWeatherForecast =>
  dailyData
    .map((data: any) => {
      return {
        date: data.dt * 1000,
        description: capitalizeFirstLetter(data.weather[0].description),
        highTemp: data.temp.max,
        lowTemp: data.temp.min,
        icon: data.weather[0].icon,
      };
    })
    .slice(0, 5);

export const DailyWeatherForecast: React.FC<any> = ({ data }) => {
  const locales = { title: "Next 5 days" };
  const formattedInput = formatInput(data);

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 2,
        boxShadow: 1,
        p: 2,
        mb: 5,
      }}
    >
      <Typography
        variant="h6"
        sx={{ padding: 2, borderBottom: "1px solid #e0e0e0" }}
      >
        {locales.title}
      </Typography>
      {formattedInput.map((dailyWeather, index) => (
        <DailyWeatherCard
          key={index}
          date={new Date(dailyWeather.date)}
          description={dailyWeather.description}
          highTemp={dailyWeather.highTemp}
          lowTemp={dailyWeather.lowTemp}
          icon={dailyWeather.icon}
        />
      ))}
    </Box>
  );
};
