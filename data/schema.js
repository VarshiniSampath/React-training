import { buildSchema } from 'graphql';
import { GraphQLList } from 'graphql';

// Build the GraphQL schema that is passed as an argument in the GraphQLHTTP request.
// Specifies the query name and the return type of the query.

var Schema = buildSchema(`
  type publicationType {
    doi: String,
    title: String,
    author: String,
    year: Int,
    citationCount: Int
  }

  type Query {
    publication: publicationType
    publicationByDOI(doi: String!): publicationType
    publications : [publicationType]
  }
`);

module.exports = { Schema };
