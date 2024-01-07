import AuthProvider from "@/providers/AuthProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Home from ".";
import AppRoot from "@/components/AppRoot";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppRoot>
     
      <Component {...pageProps} />
    </AppRoot>
  );
}
