// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

  type User {
    _id: ID
    email: String
    password: String
    savedCustomers: [Customer]
  }

  type Auth {
    token: ID
    user: User
    customer: Customer
  }

  type Part {
    _id: ID
    name: String
    description: String
    price: Float
    quantity: Int
  }

  type Repair {
    _id: ID
    purchaseDate: String
    parts: [Part]
  }

  type Customer {
    _id: ID
    firstName: String
    lastName: String
    cellPhone: String
    make: String
    model: String
    color: String
    repairs: [Repair]
  }

  type Checkout {
    session: ID
  }

  type Query {
    user: User
    customer: Customer
    parts(customer: ID, name: String): [Part]
    repair(_id: ID!): Repair
    part(_id: ID!): Part
    checkout(parts: [ID]!): Checkout
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): Auth
    checkIn(cellPhone: String!): Customer
    addCustomer(firstName: String!, lastName: String!, cellPhone: String!, make: String!, model: String!, color: String!): Auth
    updateCustomer(firstName: String, lastName: String, cellPhone: String, make: String!, model: String!, color: String!): Customer
    addRepair(parts: [ID]!): Repair
    addPart(name: String!, description: String!, price: Float!, quantity: Int!): Part
    updatePart(_id: ID!, quantity: Int!): Part
  }
`;

// export the typeDefs
module.exports = typeDefs;