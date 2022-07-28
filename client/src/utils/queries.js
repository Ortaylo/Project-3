import { gql } from '@apollo/client';

export const GET_USER = gql`
query user($username: String!) {
  user(username: $username) {
    username
    email
    messages {
      _id
      sender
      receiver
      messageText
    }
    recipes
  }
}
`
export const GET_USERS = gql`
query Users {
  users {
  username 
  email
  }
}
`

export const GET_RECIPES = gql `
query Query {
  recipes {
    _id
    recipeName
    ingredients
    estimatedTime
    description
  }
}
`