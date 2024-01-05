import AuthProvider from "@/Provider/AuthProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Home from ".";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Home/>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
