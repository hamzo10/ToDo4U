const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const api = require('./api');
const MongoClient = mongodb.MongoClient;
const databaseConfig = require('../config');
const DB_URL = `mongodb://${databaseConfig.host}:${databaseConfig.port}`;
const server = express();
const client = new MongoClient(DB_URL, { useNewUrlParser: true });

server.use(bodyParser.json());

server.use('/api', api);

server.get('/', (req, res) => {
    res.send('Hello');
});

async function connectToDatabase () {
    try {
        await client.connect();
    }
    catch (err) {
        console.error(err);
    }
}
connectToDatabase();
// TODO: Only start server if connection to db was successful
server.listen(3000, () => {
    console.log('Server started on port 3000');
});
