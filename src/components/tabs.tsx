"use client";
import { City } from "@/types";
import { Box, Tab, Tabs as MUITabs } from "@mui/material";

interface TabsProps {
  cities: Record<number, City>;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({ cities, value, onChange }) => {
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MUITabs
          value={value}
          onChange={onChange}
          aria-label="City selection tabs"
        >
          {Object.values(cities).map((city, index) => (
            <Tab key={index} label={city.name} value={city.id} />
          ))}
        </MUITabs>
      </Box>
    </>
  );
};
