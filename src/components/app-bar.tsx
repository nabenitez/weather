"use client";
import { Toolbar, AppBar as MUIAppBar, Typography } from "@mui/material";
import { SearchButton } from "./search-button";
import RefreshButton from "./refresh-button";
import { useQueryClient } from "@tanstack/react-query";

export function AppBar() {
  // TODO: use internazionalization library such as i18next
  const locales = { title: "Simple Weather" };
  const queryClient = useQueryClient();

  return (
    <MUIAppBar position="static" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {locales.title}
        </Typography>
        <SearchButton onClick={() => console.log("some")} />
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
  );
}
