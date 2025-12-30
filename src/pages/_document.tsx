import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta
          name="google-site-verification"
          content="Uh94OAZ9DPp8IAFNJoyG6ReIajXsQ2qCoKfg7BI46S8"
        />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="98045a62-9ba9-49b7-9ef4-4843d26f2956"
        ></script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="98045a62-9ba9-49b7-9ef4-4843d26f2956"
        ></script>
      </body>
    </Html>
  );
}
