"use client";
import { createTheme, MantineProvider } from "@mantine/core";

const themeComponents = {
  Card: {
    defaultProps: {
      radius: "md",
    },
    styles: () => ({
      root: {
        wordBreak: "break-word",
      },
    }),
  },
};

const theme = createTheme({
  components: themeComponents,
  /** Your theme override here */
});

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
