import type { AppProps } from "next/app";

import { Footer, Navigation } from "components/Common";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl min-h-screen gap-16 px-5 py-10 mx-auto">
      <Navigation />
      <section className="flex flex-col items-center flex-auto w-full">
        <Component {...pageProps} />
      </section>
      <Footer />
    </div>
  );
}

export default MyApp;
