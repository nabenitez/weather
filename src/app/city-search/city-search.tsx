"use client";

import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { FixedSizeList as List } from "react-window";
import { useCitiesData } from "./use-cities-data";

interface City {
  city_name: string;
  country_code: string;
}

interface RowProps {
  data: City[];
  index: number;
  style: React.CSSProperties;
}

const Row: React.FC<RowProps> = ({ data, index, style }) => {
  const city = data[index];
  return (
    <div style={style}>
      {city ? `${city.city_name}, ${city.country_code}` : ""}
    </div>
  );
};

export const CitySearch: React.FC = () => {
  const { data: cities, isLoading, error } = useCitiesData();
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [inputValue, setInputValue] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading cities data</div>;

  const filteredCities = cities?.filter((city: City) =>
    `${city.city_name}, ${city.country_code}`
      .toLowerCase()
      .includes(inputValue.toLowerCase())
  );

  const itemHeight = 36;
  const itemCount = filteredCities ? filteredCities.length : 0;

  return (
    <Autocomplete
      options={filteredCities || []}
      getOptionLabel={(option: City) =>
        `${option.city_name}, ${option.country_code}`
      }
      onChange={(event: React.ChangeEvent<{}>, newValue: City | null) =>
        setSelectedCity(newValue)
      }
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      renderInput={(params) => (
        <TextField {...params} label="Search for a city" variant="outlined" />
      )}
      sx={{ width: 300 }}
      renderOption={(props, option: City) => (
        <li {...props} style={{ listStyleType: "none", padding: 8 }}>
          {option.city_name}, {option.country_code}
        </li>
      )}
      ListboxComponent={React.forwardRef<
        HTMLUListElement,
        React.HTMLAttributes<HTMLElement>
      >(({ children, ...other }, ref) => (
        <List
          height={itemHeight * 4}
          itemCount={itemCount}
          itemSize={itemHeight}
          width="100%"
          itemData={filteredCities || []}
          style={{ overflowY: "auto" }}
        >
          {Row}
        </List>
      ))}
    />
  );
};
