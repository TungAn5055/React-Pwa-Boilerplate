import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';

export const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Cookies.get('customer_access_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const httpLink = createHttpLink({
  uri: process.env.URL_BACKEND_SERVER,
  // useGETForQueries: true,
  fetchOptions: {
    method: 'GET',
  },
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const clientRequest = methodType =>
  new ApolloClient({
    link: authLink.concat(
      createHttpLink({
        uri: process.env.URL_BACKEND_SERVER,
        fetchOptions: {
          method: methodType,
        },
      }),
    ),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
