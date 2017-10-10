import mongoose from 'mongoose';

// Schema that maps the data in the collection 'papers'.
const mongoPublicationSchema = new mongoose.Schema({
  doi: String,
  title: String,
  author: String,
  year: Number,
  citationCount: Number
});

/** Creating a mongoose model out of the MongoDB schema for querying purposes.
 * @param modelname Here it is 'publication'. Can be any string, doesn't matter.
 * @param schema The Mongoose schema that we defined above.
 * @param collectionname The name of the collection from the MongoDB, if it already exists.
 **/
let mongoPublicationModel = mongoose.model('publication', mongoPublicationSchema, 'papers');
module.exports = { mongoPublicationModel };
