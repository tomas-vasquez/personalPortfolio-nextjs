import "../styles//index.sass";
import React, { useState } from "react";
import IsReadyContext from "../contexts/IsReadyContext";

export default function App({ Component, pageProps }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <IsReadyContext.Provider value={{ isReady, setIsReady }}>
      <Component {...pageProps} />
    </IsReadyContext.Provider>
  );
}
