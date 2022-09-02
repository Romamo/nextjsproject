import Document, { Html, Head, Main, NextScript } from "next/document";

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
          <style dangerouslySetInnerHTML={createFontStyle()} />
          {/* <link href="/fonts/roboto.css" rel="stylesheet" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
