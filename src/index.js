/**
* This file gets bundled and rendered by babel-loader and webpack to public/main.js
**/

import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/App.jsx';

var ES6Promise = require("es6-promise");
ES6Promise.polyfill();
var jsonData = null;

// Renders Table component from App.jsx
ReactDOM.render(<Table/>, document.getElementById('app'));
