import gql from 'graphql-tag';

export const ADD_SIMPLE_MUTATION = gql`
  mutation addSimpleProductToCart(
    $cartId: String!
    $quantity: Float!
    $sku: String!
  ) {
    addSimpleProductsToCart(
      input: {
        cart_id: $cartId
        cart_items: [{ data: { sku: $sku, quantity: $quantity } }]
      }
    ) {
      cart {
        items {
          id
          quantity
        }
      }
    }
  }
`;
