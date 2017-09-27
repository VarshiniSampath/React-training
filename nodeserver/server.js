require('babel-register');

const express = require('express');
const server = express();

// All URL resolving is handled in controllers/routes.js file
require('./controllers/routes.js')(server);

// Creates a server running on port 3000.
server.listen(3000);
