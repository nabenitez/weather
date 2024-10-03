import * as React from "react";
import { Footer } from "@/components/footer";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Container maxWidth="xl"></Container>
      <Footer updatedAt={new Date()} />
    </main>
  );
}
