// Dateien im Projekt werden required
// TODO: 08.08.2019 Datenbank <-(MongoClient)-> Backend <-(API)-> Frontend
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb'); // ES6 Destrucutring
const api = require('./api');
const databaseConfig = require('../config');

const DB_URI = `mongodb://${databaseConfig.host}:${databaseConfig.port}`;
const server = express();
const client = new MongoClient(DB_URI, { useNewUrlParser: true });

server.use(bodyParser.json());

server.use('/api', api);

server.get('/', (req, res) => {
    res.send('Hello');
});

async function connectToDatabase () {
    try {
        await client.connect();
        server.listen(3000, () => {
            console.log('Server started on port 3000');
        });
    } catch (err) {
        console.error(err);
    }
}
connectToDatabase();
