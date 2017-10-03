import { getPublication, getPublications, getPublicationByDOI } from '../models/mongooseResolvers';

// This lists the queries that can be performed with the GraphQL endpoint.
var root = {
  publication: () => {
    return getPublication();
  },
  publications: () => {
    return getPublications();
  },
  publicationByDOI: (args) => {
    // args comes as a JSON object. So need to access doi.
    return getPublicationByDOI(args.doi);
  }
};
module.exports = { root };
