"use client";
import { Search as SearchIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";

interface SearchButtonProps {
  onClick: () => void;
}

export const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <IconButton
      size="large"
      aria-label="search"
      color="inherit"
      onClick={onClick}
    >
      <SearchIcon />
    </IconButton>
  );
};
