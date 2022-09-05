import "../styles/globals.css";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@material-ui/core/styles";
import createEmotionCache from "../components/createEmotionCache";
import theme from "../components/theme";
import React from "react";

const emotionCache = createEmotionCache();

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

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
