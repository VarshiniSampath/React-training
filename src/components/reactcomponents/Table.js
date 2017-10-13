import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import AddNewIcon from './AddNewIcon';

class Table extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        jsonData: this.props.jsonData,
        sortOrder: {
          id: true,
          author: true,
          title: true,
          year: true,
          citationCount: true
        }
      }
    }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th onClick={ () => this.sortJsonDataByKey('doi') }> DOI </th>
              <th onClick={ () => this.sortJsonDataByKey('author') }> Author </th>
              <th onClick={ () => this.sortJsonDataByKey('title') }> Title </th>
              <th onClick={ () => this.sortJsonDataByKey('year') }> Year </th>
              <th onClick={ () => this.sortJsonDataByKey('citationCount') }> Citations </th>
            </tr>
          </thead>
          <tbody>
            {this.state.jsonData.map((row, index) => {
              return <TableRow key={'row' + index} doi={row.doi} author={row.author} title={row.title} year={row.year} citationCount={row.citationCount} />;
            })}
          </tbody>
        </table>
        <AddNewIcon/>
      </div>
    );
  }
};

/**
 * Component for each row of the table. Holds details of each publication.
 **/
class TableRow extends React.Component {

  constructor(props: Object) {
    super(props);
  }

  render() {
    const {
      key,
      doi,
      author,
      title,
      year,
      citationCount,
    } = this.props;
    return (
      <tr key={key}>
        <td>{doi}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>{year}</td>
        <td>{citationCount}</td>
      </tr>
    );
  }
};

module.exports =  createFragmentContainer(Table, graphql`
      fragment Table_item on publicationType {
        doi,
        title,
        author,
        year,
        citationCount
      }
    `,
  );
