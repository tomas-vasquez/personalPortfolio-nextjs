import "../styles//index.sass";

import React, { useState } from "react";
import IsReadyContext from "../contexts/IsReadyContext";
import Head from "next/head";
import Favicon from "@/componets/Favicon";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Token ${publicRuntimeConfig.GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(
    new HttpLink({ uri: "https://api.github.com/graphql" })
  ),
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <ApolloProvider client={client}>
      <IsReadyContext.Provider value={{ isReady, setIsReady }}>
        <Head>
          <meta name="viewport" content="viewport-fit=cover" />
          <title>Tomas Vasquez</title>
          <Favicon />
        </Head>
        <Component {...pageProps} />
      </IsReadyContext.Provider>
    </ApolloProvider>
  );
}
