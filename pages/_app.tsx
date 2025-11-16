// pages/_app.tsx
import type { AppProps } from "next/app";
import "../globals.css"; // global CSS import here

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
