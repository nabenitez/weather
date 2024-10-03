import * as React from "react";
import { Footer } from "@/components/footer";
import { Container } from "@mui/material";
import { AppBar } from "@/components/app-bar";

export default function Home() {
  return (
    <main>
      <AppBar />
      <Container maxWidth="xl"></Container>
      <Footer updatedAt={new Date()} />
    </main>
  );
}
