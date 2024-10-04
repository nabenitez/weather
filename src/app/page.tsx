"use client";
import * as React from "react";
import { Footer } from "@/components/footer";
import { Container } from "@mui/material";
import { AppBar } from "@/components/app-bar";
import { Weather } from "./weather";
import { CitySearch } from "./city-search";

export default function Home() {
  const [lastUpdatedAt, setLastUpdatedAt] = React.useState<Date | null>(null);

  return (
    <main>
      <AppBar search={<CitySearch />} />
      <Container maxWidth="lg">
        <Weather setLastUpdatedAt={setLastUpdatedAt} />
      </Container>
      <Footer updatedAt={lastUpdatedAt} />
    </main>
  );
}
