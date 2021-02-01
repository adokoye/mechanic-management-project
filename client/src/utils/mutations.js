import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($email: String!, $password: String!) {
  addUser(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const CHECK = gql`
  mutation checkIn($cellPhone: String!) {
    checkIn(cellPhone: $cellPhone) {
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

export const ADD_REPAIR = gql`
  mutation addRepair($parts: [ID]!) {
    addRepair(parts: $parts) {
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
`;

export const ADD_PART = gql`
  mutation addPart($repairs: [ID]!) {
    addPart(repairs: $repairs) {
      parts {
        _id
        name
        description
        price
        quantity
      }
    }
  }
`;

export const ADD_CUSTOMER = gql`
mutation addCustomer($firstName: String!, $lastName: String!, $cellPhone: String!, $make: String!, $model: String!, $color: String!) {
  addCustomer(firstName: $firstName, lastName: $lastName, cellPhone: $cellPhone, make: $make, model: $model, color: $color) {
    token
    customer {
        _id
        firstName
        lastName
        cellPhone
        make
        model
        color
    }
  }
}
`;