// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head>
//         {/* <link rel="preload" href="/fonts/roboto.woff2" as="font" /> */}
//         <link href="/fonts/roboto.css" rel="stylesheet" />
//         <meta
//           name="description"
//           content="Test your website with the free SEO check from Seobility and get tips for a better search engine optimization."
//         />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

import Document, { Html, Head, Main, NextScript } from "next/document";

class HeadProduction extends Head {
  render() {
    const { head } = this.context._documentProps;
    const children = this.props.children;
    console.log(process.env.NODE_ENV);
    return (
      <head {...this.props}>
        {children}
        {head}
        {this.getCssLinks()}
      </head>
    );
  }
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    console.log(process.env.NODE_ENV);
    return { ...initialProps };
  }

  render() {
    const isDev = process.env.NODE_ENV === "development";
    console.log(process.env.NODE_ENV);
    return (
      <Html>
        {isDev ? <Head /> : <HeadProduction />}
        <body>
          <Main />
          {isDev && <NextScript />}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
