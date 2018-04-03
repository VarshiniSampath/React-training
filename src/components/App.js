import React from 'react';
import Relay, { createFragmentContainer, graphql } from 'react-relay';
import Table from './reactcomponents/Table.js';
//import AppHomeRoute  from '../routes/AppHomeRoute.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( <Table jsonData={this.props.publications} />);
  }
}

module.exports =  createFragmentContainer(App, graphql`
      fragment App_publication on publicationType {
        doi,
        title,
        author,
        year,
        citationCount
      }
    `,
);
