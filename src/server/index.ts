import 'reflect-metadata';
import { useContainer, ConnectionOptions, createConnection } from 'typeorm';
import { Container } from 'typedi';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import * as TypeGraphQl from 'type-graphql';

import { User } from './entities/user';
import { UserResolver } from './resolvers/user-resolver';

useContainer(Container);

const databaseOptions: ConnectionOptions = {
  type: 'sqlite',
  database: `${path.resolve(__dirname, '.')}/data/users.sqlite3`,
  entities: [User],
  logging: true, // switch to 'all' or true to enable database query logging
};

const bootstrapApp = async () => {
  try {
    const connection = await createConnection(databaseOptions);

    // TODO We serve data very inefficiently here for aggregation.
    // Could there be better model to serve data to the front-end?

    const schema = await TypeGraphQl.buildSchema({
      resolvers: [UserResolver],
      container: Container,
    });

    const server = new ApolloServer({ schema });

    const { url } = await server.listen(4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
  } catch (error) {
    console.error(error);
  }
};

bootstrapApp();
