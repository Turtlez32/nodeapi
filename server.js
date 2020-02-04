'use strict';

const http = require('http');

const hostname = '0.0.0.0';
const port = 3001;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end('Hello World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Servier is runiing at ${hostname}:${port}`);
});