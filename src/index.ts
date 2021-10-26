const { ApolloServer } = require('apollo-server');

import { typeDefs } from './schema';
import { resolvers } from './resolver';

const port = process.env.PORT || 9090;

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));