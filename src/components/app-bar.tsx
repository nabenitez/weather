"use client";
import { Toolbar, AppBar as MUIAppBar, Typography } from "@mui/material";
import { SearchButton } from "./search-button";
import RefreshButton from "./refresh-button";
import { useQueryClient } from "@tanstack/react-query";

import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

export function AppBar({ search }: { search: React.ReactNode }) {
  // TODO: use internazionalization library such as i18next
  const locales = { title: "Simple Weather" };
  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSearchButtonClick = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <MUIAppBar position="static" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {locales.title}
          </Typography>
          <SearchButton onClick={handleSearchButtonClick} />
          <RefreshButton
            onClick={() => {
              console.log("invalidating query");
              queryClient.invalidateQueries({
                queryKey: ["weatherByCity"],
                exact: false,
              });
            }}
          />
        </Toolbar>
      </MUIAppBar>
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Search</DialogTitle>
        <DialogContent>{search}</DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
