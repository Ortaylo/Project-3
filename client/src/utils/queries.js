import { gql } from '@apollo/client';

export const GET_ME = gql`
query getMe($username: String!){
    me(username: $username) {
        _id
        username
        email
      savedBooks {
        _id
        authors
        title
        bookId
        description
        image
        
      }
    }
  }
`