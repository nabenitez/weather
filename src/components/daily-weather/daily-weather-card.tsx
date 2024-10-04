import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface DailyWeatherCardProps {
  date: Date;
  description: string;
  highTemp: number;
  lowTemp: number;
  icon: string;
}

export const DailyWeatherCard: React.FC<DailyWeatherCardProps> = ({
  date,
  description,
  highTemp,
  lowTemp,
  icon,
}) => {
  const imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const formattedDatetime = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image src={imgUrl} alt="weather icon" width={50} height={50} />
        <Box sx={{ marginLeft: 2 }}>
          <Typography variant="body1" component="div">
            {formattedDatetime}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" component="div">
        {highTemp.toFixed(0)}° {lowTemp.toFixed(0)}°
      </Typography>
    </Box>
  );
};
