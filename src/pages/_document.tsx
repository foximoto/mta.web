import { Bug } from "lucide-react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme="light">
      <Head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="98045a62-9ba9-49b7-9ef4-4843d26f2956"
        ></script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <div className="fab">
          <a
            href="https://tally.so/r/nrXNZN"
            className="btn btn-lg btn-circle bg-red-600 text-white"
          >
            <Bug />
          </a>
        </div>

        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="98045a62-9ba9-49b7-9ef4-4843d26f2956"
        ></script>
      </body>
    </Html>
  );
}
