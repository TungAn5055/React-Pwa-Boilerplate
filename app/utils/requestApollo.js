import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

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
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export function* rootSaga() {
  yield setContext({ client });
}
