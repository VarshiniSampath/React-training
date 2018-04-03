import Relay, { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

// 2
const mutation = graphql`
  mutation SaveFormMutation($input: insertPublicationInput!) {
    insertPublication(input: $input) {
      doi
      title
      author
      year
      citationCount
    }
  }
`;


export default (environment, args, callback) => {
  console.log('SaveFormMutation: commit');
  const variables = {
    input: {
      doi: args.input.doi,
      title: args.input.title,
      author: args.input.author,
      year: args.input.year,
      citationCount: args.input.citationCount
    }
  };
  console.log(variables);
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (data) => {
        return data;
      },
      onError: (err) => {
        console.error(err);
      }
    },
  );
}
