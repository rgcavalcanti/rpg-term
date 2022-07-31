import { Theme, ThemeProvider } from "@emotion/react";
import React from "react";

const theme: Theme = {
  color: {
    primary: "#eceff4",
    secondary: "#3b4252",
    background: "#d8dee9",
    shadow: "#2e3440",
  },
};

export const GlobalTheme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
