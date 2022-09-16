import type { AppProps } from "next/app";
import { Footer, Navigation } from "components/Common";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div id="body">
            <Navigation />
            <div id="container">
                <Component {...pageProps} />
            </div>
            <Footer />
        </div>
    );
}

export default MyApp;
