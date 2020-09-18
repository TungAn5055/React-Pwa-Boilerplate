import gql from 'graphql-tag';

export const GET_PRODUCT_BY_CATEGORY = gql`
  query getProductsByCategory($category_id: String, $pageSize: Int!) {
    products(
      filter: { category_id: { eq: $category_id } }
      pageSize: $pageSize
    ) {
      items {
        id
        name
        sku
        small_image {
          url
        }
        url_key
        price {
          regularPrice {
            amount {
              value
              currency
            }
          }
        }
      }
      total_count
      filters {
        name
        filter_items_count
        request_var
        filter_items {
          label
          value_string
        }
      }
    }
  }
`;
