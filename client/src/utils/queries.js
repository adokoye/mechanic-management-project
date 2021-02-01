import gql from "graphql-tag";

export const QUERY_PARTS = gql`
  query getParts($customer: ID) {
    parts(customer: $customer) {
      _id
      name
      description
      price
      quantity
      customer {
        _id
      }
    }
  }
`;

export const QUERY_ALL_PARTS = gql`
  {
    parts {
      _id
      name
      description
      price
      quantity
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      email
      savedCustomers {
        _id
        firstName
        lastName
        cellPhone
        make
        model
        color
        repairs {
          _id
          purchaseDate
          parts {
            _id
            name
            description
            price
            quantity
          }
        }
      }
    }
  }
`;

export const QUERY_CUSTOMER = gql`
{
customer {
  cellPhone
  repairs {
    _id
    purchaseDate
      parts {
        _id
        name
        description
        price
        quantity
      }
    }
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($parts: [ID]!) {
    checkout(parts: $parts) {
      session
    }
  }
`;