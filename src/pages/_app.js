import "../styles//index.sass";
import React, { useState } from "react";
import IsReadyContext from "../contexts/IsReadyContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <IsReadyContext.Provider value={{ isReady, setIsReady }}>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </IsReadyContext.Provider>
  );
}
