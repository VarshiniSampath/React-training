import { Schema } from '../../data/schema';
import { root } from '../../data/queries/';
import graphQLHTTP  from 'express-graphql';
import express from 'express';
import path from 'path';
import fs from 'fs';


module.exports = (server) => {

  // Creates a GraphQL endpoint using the Schema and queries constructed.
  // @param pretty Makes the JSON result returned formatted better.
  server.use('/graphql', graphQLHTTP({
    schema: Schema,
    rootValue: root,
    pretty: true,
  }));

  // The root of the project is index.html, which is opened when the project is opened.
  server.get('/', (request, response) => {
    response.sendFile(path.resolve('./public/index.html'));
  });

  // Common resolve for all other kinds of URL.
  server.get('*', (request, response) => {

    console.log('hey');

    const filePath = path.join('./public/' + request.url);
    const fileExtension = path.extname(filePath);
    console.log(filePath);
    console.log(request.url + " " + fileExtension);
    let contentType = 'text/html';

    if (fileExtension === '.css') {
      contentType = 'text/css';
    } else if (fileExtension === '.js') {
      contentType = 'application/javascript';
    } else if (fileExtension === '.png') {
      contentType = 'image/png';
    }

    fs.readFile(filePath, (error, content) => {
      if (!error) {
        response.writeHead(200, { 'Content-Type': contentType + ";charset=utf-8" });
        response.write(content);
        response.end();
      } else {
        console.log(error.stack);
        response.writeHead(500);
        response.end();
      }
    });
   });

};
