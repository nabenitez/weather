"use client";
import * as React from "react";
import { Footer } from "@/components/footer";
import { Container } from "@mui/material";
import { AppBar } from "@/components/app-bar";
import { Weather } from "./weather";

export default function Home() {
  const [lastUpdatedAt, setLastUpdatedAt] = React.useState<Date | null>(null);

  return (
    <main>
      <AppBar />
      <Container maxWidth="lg">
        <Weather setLastUpdatedAt={setLastUpdatedAt} />
      </Container>
      <Footer updatedAt={lastUpdatedAt} />
    </main>
  );
}
