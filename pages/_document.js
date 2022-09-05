import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default class MyDocument extends Document {
  render() {
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
          <style dangerouslySetInnerHTML={createFontStyle()} />
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
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
