import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import createEmotionCache from "../components/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";

export default class MyDocument extends Document {
  render() {
    const shouldRenderScripts =
      this.props.unstable_runtimeJS || process.env.NODE_ENV !== "production";

    function createFontStyle() {
      return {
        __html:
          "@font-face{font-family:'Roboto';src:local('Roboto'),url('/fonts/roboto.woff2') format('woff2');font-style: normal;font-weight: 400;font-display: block;}",
      };
    }
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Test your website with the free SEO check from Seobility and get tips for a better search engine optimization."
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          {/* <style dangerouslySetInnerHTML={createFontStyle()} /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  /* eslint-disable */
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          // @ts-ignore
          return <App emotionCache={cache} {...props} />;
        },
    });
  /* eslint-enable */

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
