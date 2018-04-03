/**
* This file gets bundled and rendered by babel-loader and webpack to public/main.js
**/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { modernEnvironment } from './environment.js';
import { QueryRenderer } from 'react-relay';

ReactDOM.render(
  <QueryRenderer
    environment={ modernEnvironment }
    query={ graphql`
      query srcQuery {
        publications {
          doi
          title
          author
          year
          citationCount
        }
      }
    `}
    variables={{}}
    render={({error, props}) => {
      if (props) {
        return <App publications={props.publications} />;
      } else {
        return <div>Loading</div>;
      }
    }}
  />,
  document.getElementById('app')
);
