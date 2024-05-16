const { gql } = require("apollo-server");

module.exports = gql`
  type Mutation {
    registerUser(email: String!, password: String!): User
    loginUser(email: String!, password: String!): User
  }

  type Query {
    meQuery(token: String): Email
  }

  type User {
    token: String
  }

  type Email {
    email: String
  }
`;
