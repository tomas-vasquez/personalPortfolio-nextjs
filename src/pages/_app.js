import "../styles//index.sass";
import React, { useState } from "react";
import IsReadyContext from "../contexts/IsReadyContext";
import Head from "next/head";
import Favicon from "@/componets/Favicon";

export default function App({ Component, pageProps }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <IsReadyContext.Provider value={{ isReady, setIsReady }}>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <title>Tomas Vasquez</title>
        <Favicon />
      </Head>
      <Component {...pageProps} />
    </IsReadyContext.Provider>
  );
}
