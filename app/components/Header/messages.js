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
  graphql: {
    id: `${scope}.graphql`,
    defaultMessage: 'Pokemons',
  },
});
