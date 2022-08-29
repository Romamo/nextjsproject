import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="preload" href="/fonts/roboto.woff2" as="font" /> */}
        <link href="/fonts/roboto.css" rel="stylesheet" />
        <meta
          name="description"
          content="Test your website with the free SEO check from Seobility and get tips for a better search engine optimization."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

