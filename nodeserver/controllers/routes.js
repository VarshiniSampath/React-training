var fs = require('fs');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');

module.exports = (server) => {

  server.use(bodyParser.urlencoded( { extended: true } ));

  /**
   * Controller that routes requests based on the URL using ExpressJS.
   * Server runs on PORT 3000.
   **/

  // The root of the project is index.html, which is opened when the project is opened.
  server.get('/', (request, response) => {
    response.sendFile(path.resolve('./public/index.html'));
  });

  // This API call can be used to get the current data.
  // Reads data from JSON file and returns it.
  // Using a JSON file since the data is small. Can be extended to DB.
  server.get('/publications/', (request, response) => {
    var fileContent = fs.readFileSync('data/publications.json');
    var jsonContent = JSON.parse(fileContent);
    response.json(jsonContent);
  });

  // This API call can be used to post a new publication to the current data.
  // Reads data from JSON file, appends new data and redirects to root.
  server.post('/publications/', (request, response) => {
      var newPublication = {
        "id": parseInt(request.body.id),
        "title": request.body.title,
        "author": request.body.author,
        "year": parseInt(request.body.year),
        "citationCount": parseInt(request.body.citationCount)
      };
      var content = JSON.parse(fs.readFileSync('data/publications.json'));
      content.push(newPublication);
      content = JSON.stringify(content);
      fs.writeFile('data/publications.json', content, 'utf8', (err) => {
        if(err) {
          return response.redirect('/');
        } else {
          return response.redirect('/');
        }
      });

  });

  // Common resolve for all other kinds of URL.
  server.get('*', (request, response) => {

       var filePath = path.join('./' + request.url);
       var fileExtension = path.extname(filePath);

       console.log(request.url + " " + fileExtension);

       var contentType = 'text/html';

       if(fileExtension == '.css') {
         contentType = 'text/css';
       }
       else if(fileExtension == '.js') {
         contentType = 'application/javascript';
       }
       else if(fileExtension == '.png') {
         contentType = 'image/png';
       }

       fs.readFile(filePath, (error, content) => {
           if(!error) {
             response.writeHead(200, { 'Content-Type': "'" + contentType + ";charset=utf-8" });
             response.write(content);
             response.end();
           }
           else{
             console.log(error);
             response.writeHead(500);
             response.end();
           }
       });
   });
};
