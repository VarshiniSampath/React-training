import { buildSchema, GraphQLList } from 'graphql';

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

  input insertPublicationInput {
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

  type Mutation {
    insertPublication(input: insertPublicationInput!): publicationType
  }
`);

module.exports = { Schema };
