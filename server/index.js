const express = require('express');
const server = express();
const api = require('./api');

server.use('/api', api);

server.get('/', (req, res) => {
    res.send('Hello');
});

server.listen(3000, () => {
    console.log('Server started on port 3000');
});
