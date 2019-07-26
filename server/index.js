const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const api = require('./api');
const server = express();
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'ToDO4U';
const client = new MongoClient(url);

server.use(bodyParser.json());

server.use('/api', api);

server.get('/', (req, res) => {
    res.send('Hello');
});

client.connect((error) => {
    if(error) {
        console.error(error);
    }
});

server.listen(3000, () => {
    console.log('Server started on port 3000');
});
