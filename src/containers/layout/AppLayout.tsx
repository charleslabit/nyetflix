"use client";
import { AppShell } from "@mantine/core";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer pos="relative" mt={100}>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
