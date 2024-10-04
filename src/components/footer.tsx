import { Box, Typography } from "@mui/material";

interface FooterProps {
  updatedAt: Date | null;
}

export const Footer = ({ updatedAt }: FooterProps) => {
  // TODO: use internazionalization library such as i18next
  const locales = { lastUpdated: "Last updated on" };

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  if (!updatedAt) return null;

  const formattedDatetime = updatedAt.toLocaleDateString("en-US", options);

  return (
    <Box
      position="fixed"
      width="100%"
      component="footer"
      sx={{
        top: "auto",
        bottom: 0,
        bgcolor: "primary.main",
      }}
    >
      <Typography
        variant="body1"
        align="right"
        color="white"
        component="div"
        sx={{ pr: 1 }}
      >
        {locales.lastUpdated} {formattedDatetime}
      </Typography>
    </Box>
  );
};
