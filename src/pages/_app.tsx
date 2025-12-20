import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextTopLoader />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
