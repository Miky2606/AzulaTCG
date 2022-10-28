import { Html, Head, Main, NextScript } from "next/document";

export default function Document(): JSX.Element {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="This page is about the world of Yu-Gi-Oh! TCG"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
