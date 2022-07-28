const {gql} = require('apollo-server-express');

const typeDefs = gql`

  type Recipe {
    _id: ID
    recipeName: String
    ingredients: [String]
    estimatedTime: String
    description: String
  }
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
    recipes: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  input RecipeInput{
    recipeName: String
    ingredients: [String]
    estimatedTime: String
    description: String
  }
  type Query {
    users: [User]
    user(username: String!): User
    recipes: [Recipe]
    recipe(_id: ID!):Recipe
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    sendMessage(sender: String,receiver: String, messageText: String!): User
    removeMessage(username: String!,messageId: ID!): User
    removeUser(username: String!): User
    login(email: String!, password: String!): Auth
    addRecipe(input: RecipeInput!): Recipe
    removeRecipe(_id: ID!): Recipe
    addRecipeToUser(userId:ID!,recipeId:ID!): User
  }`;

module.exports = typeDefs
