import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo-hooks';
import ApolloClient from 'apollo-boost';
import { GridIndex } from './views/GridIndex';

const graphqlClient = new ApolloClient({
  uri: 'http://localhost:4000/',
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={graphqlClient}>
      <GridIndex />
    </ApolloProvider>
  );
};

render(<App />, document.getElementById('root'));
