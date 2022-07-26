import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import client from './utils/apolloClient'
import { ApolloProvider }  from '@apollo/client';
import {AuthProvider} from './context/authContext'
ReactDOM.render(
  <AuthProvider>
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>
  </AuthProvider>,
  document.getElementById('root')
);
