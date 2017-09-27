import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import styles from './css/index.css';
import AddNewIcon from './AddNewIcon.jsx';

/**
 * Component for the table that contains the list of publications.
 * Handles loading the data from the backend and populating the table row-by-row.
 * Also has a generic function that can sort the table based on a column.
 **/

export default class Table extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        jsonData: [],
        sortOrder: {
          id: true,
          author: true,
          title: true,
          year: true,
          citationCount: true
        }
      }
      this.loadApiData = this.loadApiData.bind(this);
    }

    // Function to pull data from the backend and set it to the state.
    loadApiData() {
      axios.get('/publications/')
        .then(result => {
          this.setState( {jsonData: result.data} );
        });
    }

    /**
     * Function to sort the data in the state by a key.
     * @param key The key name in the JSON data. Can be one of 'id', 'author', 'title', 'year', 'citations'
     **/
    sortJsonDataByKey(key) {
      let tempData = this.state.jsonData;
      const sortOrder = this.state.sortOrder[key];
      tempData.sort( (a, b) => {
        if (sortOrder) {
          return a[key] > b[key];
        } else {
          return a[key] < b[key];
        }
      });
      this.state.sortOrder[key] = !this.state.sortOrder[key];
      this.setState( {jsonData: tempData} );
    }

    // Loads data once the component has been mounted and rendered
    componentDidMount() {
      this.loadApiData();
    }

    // The render method renders the text 'Loading...' till data is unavailable.
    // Once data is queried from the backend, it populates the rows of the table.
     render() {
     if (this.state.jsonData.length > 0) {
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th onClick={ () => this.sortJsonDataByKey('id') }> ID </th>
                <th onClick={ () => this.sortJsonDataByKey('author') }> Author </th>
                <th onClick={ () => this.sortJsonDataByKey('title') }> Title </th>
                <th onClick={ () => this.sortJsonDataByKey('year') }> Year </th>
                <th onClick={ () => this.sortJsonDataByKey('citationCount') }> Citations </th>
              </tr>
            </thead>
            <tbody>
              {this.state.jsonData.map((row, index) => {
                return <TableRow key={'row' + index} id={row.id} author={row.author} title={row.title} year={row.year} citationCount={row.citationCount} />;
              })}
            </tbody>
          </table>
          <AddNewIcon/>
        </div>
      );
      } else {
        return <div>Loading...</div>;
      }
    }
};

/**
 * Component for each row of the table. Holds details of each publication.
 **/
class TableRow extends React.Component {

  constructor(props: Object) {
    super(props);
    console.log(props);
  }

  render() {
    const {
      key,
      id,
      author,
      title,
      year,
      citationCount,
    } = this.props;
    return (
      <tr key={key}>
        <td>{id}</td>
        <td>{author}</td>
        <td className='title'>{title}</td>
        <td>{year}</td>
        <td>{citationCount}</td>
      </tr>
    );
  }
};
