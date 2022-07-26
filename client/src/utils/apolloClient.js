import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import {setContext} from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: '/graphql',
})

const AuthLink = setContext((_,{ header }) => {
return {
  Headers: {
    ...header,
    authorization: localStorage.getItem("token") || ""
  }
}
})
const client = new ApolloClient({
  link: AuthLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;