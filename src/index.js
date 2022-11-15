import React from "react";
import ReactDom from "react-dom";
import App from "./App";

import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, ApolloLink, concat } from "@apollo/client";
import Context from "./Context";

const httpLink = new HttpLink({ uri: 'https://petgram-server-joel-suarez-86194ed31-joelsuarez1101.vercel.app/graphql' })

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  const authorization = token ? `Bearer ${token}` : ''
  operation.setContext({
    headers: {
      authorization
    }
  })

  return forward(operation)
})

const defaultOptions = {
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
  onError: (error) => {
    const { networkError } = error;
    if(networkError && networkError.result.code === 'invalid_token') {
      console.log('networkError', networkError)
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  },
  defaultOptions: defaultOptions,
})

ReactDom.render(
  <ApolloProvider client={client}>
    <Context.Provider>
      <App />
    </Context.Provider>
  </ApolloProvider>,
  document.getElementById("app")
);
