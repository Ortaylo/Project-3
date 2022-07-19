import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/graphql',
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    
    </ApolloProvider>
  );
}

export default App;
