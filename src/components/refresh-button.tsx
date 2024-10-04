"use client";
import React from "react";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";

interface RefreshButtonProps {
  onClick: () => void;
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ onClick }) => {
  return (
    <IconButton
      size="large"
      color="inherit"
      onClick={onClick}
      aria-label="refresh"
    >
      <RefreshIcon />
    </IconButton>
  );
};

export default RefreshButton;
