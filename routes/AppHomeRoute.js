import Relay, { graphql } from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    publication: () => graphql`
      query {
        publication
      }
    `,
  };
  static routeName = 'AppHomeRoute';
};
