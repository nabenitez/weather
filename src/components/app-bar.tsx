import { Toolbar, AppBar as MUIAppBar, Typography } from "@mui/material";
import { SearchButton } from "./search-button";

export function AppBar() {
  // TODO: use internazionalization library such as i18next
  const locales = { title: "Simple Weather" };

  return (
    <MUIAppBar position="static" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {locales.title}
        </Typography>
        <SearchButton />
      </Toolbar>
    </MUIAppBar>
  );
}
