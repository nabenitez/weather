import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface HourlyWeatherCardProps {
  time: string;
  temperature: number;
  pop: number;
  icon: string;
}

export const HourlyWeatherCard = ({
  time,
  temperature,
  pop,
  icon,
}: HourlyWeatherCardProps) => {
  const imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 1,
        width: "150px",
      }}
    >
      <Typography variant="h5" component="div">
        {temperature}°
      </Typography>
      <Typography variant="subtitle1" color="info.main">
        {pop}%
      </Typography>
      <Image src={imgUrl} alt="weather icon" width={50} height={50} />
      <Typography variant="body2" color="textSecondary" noWrap>
        {time}
      </Typography>
    </Box>
  );
};
