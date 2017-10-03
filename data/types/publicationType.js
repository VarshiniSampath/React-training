import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

// The GraphQL type for a research paper.
// This type will be used in GraphQL queries to specify the return type.
const publicationType = new GraphQLObjectType({
  name: 'Paper', // A string that gives a name to this type, can be any value, doesn't matter
  description: 'A research paper',
  fields: () => ({
    doi: {
      type: GraphQLString,
      description: 'DOI of the paper',
    },
    title: {
      type: GraphQLString,
      description: 'Title of the paper',
    },
    author: {
      type: GraphQLString,
      description: 'Author of the paper',
    },
    year: {
      type: GraphQLInt,
      description: 'Title of the paper',
    },
    citationCount : {
      type: GraphQLInt,
      description: 'Title of the paper',
    }
  }),
});

module.exports = { publicationType };
