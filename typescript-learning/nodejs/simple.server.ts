// NodeJS has some in-built packages; one of them is http
// http is a package ^that allows us to create a server and listen to requests on a particular port number (e.g. 3000) and respond to those requests

// For TypeScript to understand the http package, we need to install the types for it:
// npm install @types/node --save-dev
import * as http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let message = 'Hello guys, welcome to Opolo Hub!';
  if (req.url === '/about') {
    message = 'This is the about page';
  }
  res.end(message);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
