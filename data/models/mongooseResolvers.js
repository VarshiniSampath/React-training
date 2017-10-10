// This file has resolvers for queries that get data from MongoDB using Mongoose.

import { mongoPublicationModel }  from './mongooseSchema.js';

// Function to get the first paper in the collection.
const getPublication = () => {
  console.log('Getting one publication from DB');
  return new Promise((resolve, reject) => {
    mongoPublicationModel.findOne({}, (err, record) => {
      err ? reject(err) : resolve(record);
    });
  });
};

/**
 * Function to get a paper given a DOI.
 * @param doi A string value represting the Digital Object Identifier.
 * Returns the paper that matches the DOI.
 **/
const getPublicationByDOI = (doi) => {
  console.log('Getting publication by DOI from DB' + doi);
  return new Promise((resolve, reject) => {
    mongoPublicationModel.findOne({doi: doi}, (err, record) => {
      err ? reject(err) : resolve(record);
    });
  });
};

// Function to get the list of papers in the collection.
// Since sample collection has only 5 records, this gets all of them in a single request.
const getPublications = () => {
  console.log('Getting the list of all publications from DB');
  return new Promise((resolve, reject) => {
    mongoPublicationModel.find({}, (err, record) => {
      err ? reject(err) : resolve(record);
    });
  });
}

/** Function to insert a publication to the DB.
 * @param args JSON object with key as 'input' and value od insertPublicationInput type.
 * Returns error if error occurs, and the data that was inserted if inserted successfully.
 **/
const insertPublication = (args) => {
  const input = args.input;
  console.log('Inserting new publication to DB');
  return new Promise((resolve, reject) => {
    var newPublication = new mongoPublicationModel({
      doi: input.doi,
      title: input.title,
      author: input.author,
      year: input.year,
      citationCount: input.citationCount
    });
    newPublication.save((err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

module.exports = { getPublication, getPublications, getPublicationByDOI, insertPublication };
