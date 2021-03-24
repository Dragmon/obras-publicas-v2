import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './Theme';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './components/App';

const client = new ApolloClient({
  uri: process.env.API,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Theme>
  </React.StrictMode>,
  document.getElementById('app')
);
