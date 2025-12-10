import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextTopLoader />
      <Component {...pageProps} />
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}
