import "../styles/globals.css";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@material-ui/core/styles";
import createEmotionCache from "../components/createEmotionCache";
import theme from "../components/theme";
import React from "react";

const emotionCache = createEmotionCache();

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </React.Fragment>
  );
}

export default MyApp;
