import gql from 'graphql-tag';

export const GET_CUSTOMER = gql`
  query getCustomer {
    customer {
      id
      email
      firstname
      lastname
      created_at
      group_id
      prefix
      firstname
      middlename
      lastname
      suffix
      email
      default_billing
      default_shipping
      dob
      taxvat
      gender
      is_subscribed
      addresses {
        id
        customer_id
        region_id
        country_id
        street
        company
        telephone
        fax
      }
    }
  }
`;
