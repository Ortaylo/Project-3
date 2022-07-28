import { gql } from '@apollo/client';

export const ADD_USER = gql`

mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
      email
    }
  }
}
`

export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
  token
  user {
    username
    email
    messages{
      sender
      receiver
      messageText
    }
  }
  }
}
`

export const SEND_MESSAGE = gql `
mutation SendMessage($messageText: String!, $receiver: String, $sender: String) {
  sendMessage(messageText: $messageText, , receiver: $receiver, sender: $sender) {
    _id
    username
    email
      messages {
        sender
        messageText
      }
  }
}
`

export const ADD_RECIPE = gql `
mutation Mutation($input: RecipeInput!) {
  addRecipe(input: $input) {
    _id
    recipeName
    ingredients
    estimatedTime
    description
  }
}`