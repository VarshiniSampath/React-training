import { Schema } from '../../data/schema';
import { root } from '../../data/queries/';
import graphQLHTTP  from 'express-graphql';

// Creates a GraphQL endpoint using the Schema and queries constructed.
// @param pretty Makes the JSON result returned formatted better.

module.exports = (server) => {

  server.use('/graphql', graphQLHTTP({
    schema: Schema,
    rootValue: root,
    pretty: true,
  }));

};
