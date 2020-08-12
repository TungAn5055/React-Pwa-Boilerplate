/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  features: {
    id: `${scope}.product-list`,
    defaultMessage: 'Product List',
  },
  features2: {
    id: `${scope}.product-list2`,
    defaultMessage: 'Product List Saga',
  },
  graphql: {
    id: `${scope}.graphql`,
    defaultMessage: 'Pokemons',
  },
});
