import type { AppProps } from "next/app";
import { Footer, Navigation } from "components/Common";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div id="body">
            <Navigation />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;
