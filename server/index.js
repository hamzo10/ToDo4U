const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const api = require('./api');
const MongoClient = mongodb.MongoClient;
// TODO: Add flexible db config
const DB_URL = 'mongodb://localhost:27017';
// const DB_NAME = 'ToDo4U';
const server = express();
const client = new MongoClient(DB_URL, { useNewUrlParser: true });

server.use(bodyParser.json());

server.use('/api', api);

server.get('/', (req, res) => {
    res.send('Hello');
});
// TODO: Add try-catch-block
client.connect((err) => {
    if (err) {
        console.error(err);
    }
});
// TODO: Only start server if connection to db was successful
server.listen(3000, () => {
    console.log('Server started on port 3000');
});
