import { gql } from '@apollo/client';

export const GET_USER = gql`
query user($username: String!) {
  user(username: $username) {
    username
    email
    messages {
      sender
      receiver
      messageText
    }
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