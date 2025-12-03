import store from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <NextTopLoader />
        <Component {...pageProps} />
        <Toaster position="bottom-center" reverseOrder={false} />
      </Provider>
    </>
  );
}
