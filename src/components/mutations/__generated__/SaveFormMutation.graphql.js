/**
 * @flow
 * @relayHash dc6adc5677a01b4951df0d459e4af2c1
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SaveFormMutationVariables = {|
  input: {
    doi?: ?string;
    title?: ?string;
    author?: ?string;
    year?: ?number;
    citationCount?: ?number;
  };
|};
export type SaveFormMutationResponse = {|
  +insertPublication: ?{|
    +doi: ?string;
    +title: ?string;
    +author: ?string;
    +year: ?number;
    +citationCount: ?number;
  |};
|};
*/


/*
mutation SaveFormMutation(
  $input: insertPublicationInput!
) {
  insertPublication(input: $input) {
    doi
    title
    author
    year
    citationCount
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "insertPublicationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SaveFormMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "insertPublicationInput!"
          }
        ],
        "concreteType": "publicationType",
        "name": "insertPublication",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "doi",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "title",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "author",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "year",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "citationCount",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "SaveFormMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "insertPublicationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SaveFormMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "insertPublicationInput!"
          }
        ],
        "concreteType": "publicationType",
        "name": "insertPublication",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "doi",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "title",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "author",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "year",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "citationCount",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation SaveFormMutation(\n  $input: insertPublicationInput!\n) {\n  insertPublication(input: $input) {\n    doi\n    title\n    author\n    year\n    citationCount\n  }\n}\n"
};

module.exports = batch;
