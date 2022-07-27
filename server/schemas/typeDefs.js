const {gql} = require('apollo-server-express');

const typeDefs = gql`

  type Message {
    _id: ID
    sender: String
    receiver: String
    messageText: String
  }
  
  type User {
    _id: ID
    username: String
    email: String
    password: String
    messages: [Message]
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    users: [User]
    user(username: String!): User

  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    sendMessage(sender: String,receiver: String, messageText: String!): User
    removeMessage(username: String!,messageId: ID!): User
    removeUser(username: String!): User
    login(email: String!, password: String!): Auth
  }`;

module.exports = typeDefs
