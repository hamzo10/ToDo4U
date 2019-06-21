const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const server = express();

server.use(bodyParser.json());

server.use('/api', api);

server.get('/', (req, res) => {
    res.send('Hello');
});

server.listen(3000, () => {
    console.log('Server started on port 3000');
});
