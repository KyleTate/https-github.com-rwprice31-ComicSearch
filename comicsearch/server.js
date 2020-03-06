var http = require('http');
const express = require('express');
const app = express();

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World!');
    response.end();
}
http.createServer(onRequest).listen(8000);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(8000, () => console.log('Example app listening on port 3000!'));

