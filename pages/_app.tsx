import React from "react";
import type { AppProps } from "next/app";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "../css/style.css";

const theme = createTheme({
  typography: {
    fontFamily: ["inherit"].join(","),
  },
  palette: {
    primary: {
      light: "#c084fc",
      main: "#7e22ce",
      dark: "#6b21a8",
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <main id="root">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
};

export default MyApp;
