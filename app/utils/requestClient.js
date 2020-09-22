import Cookies from 'js-cookie';
import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';

// get the authentication token from local storage if it exists
const token = Cookies.get('customer_access_token');

const endpoint = process.env.URL_BACKEND_SERVER;

export const client = new GraphQLClient(endpoint);
// Set a single header
// client.setHeader('authorization', token ? `Bearer ${token}` : '');

// Override all existing headers
client.setHeaders({
  authorization: token ? `Bearer ${token}` : '',
  method: 'GET',
  cache: 'force-cache',
});

/**
 *
 * @param query: string Convert RequestDocument to String
 * @param variables
 * @returns {Promise<{data?: any, extensions?: any, headers: Headers, status: number, errors?: GraphQLError[]}>}
 */
export const clientRaw = (query, variables = null) =>
  client.rawRequest(print(query), variables);
