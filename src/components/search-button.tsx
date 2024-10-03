"use client";
import { Search as SearchIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export function SearchButton() {
  return (
    <IconButton
      size="large"
      aria-label="search"
      color="inherit"
      onClick={() => console.log("some")}
    >
      <SearchIcon />
    </IconButton>
  );
}
