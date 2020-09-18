import gql from 'graphql-tag';

export const GRAPHQL_ADD_SIMPLE_PRODUCT = gql`
  mutation addSimpleProductsToCart(
    $cart_id: String!
    $quantity: Float!
    $sku: String!
  ) {
    addSimpleProductsToCart(
      input: {
        cart_id: $cart_id
        cart_items: [{ data: { quantity: $quantity, sku: $sku } }]
      }
    ) {
      cart {
        items {
          id
          product {
            sku
            stock_status
          }
          quantity
        }
      }
    }
  }
`;
