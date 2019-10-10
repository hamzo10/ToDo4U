// Dateien im Projekt werden required
// TODO: 08.08.2019 Datenbank <-(MongoClient)-> Backend <-(API)-> Frontend
const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config');
const database = require('./database');
const api = require('./api');

const server = express();

async function start () {
    try {
        await database.connect();
        server.listen(config.server.port);
        console.log('Server started on port', config.server.port);
    } catch (err) {
        console.error(err);
    }
}

server.use(bodyParser.json());

server.use('/api', api);

server.use((err, req, res, next) => {
    res.status(500).send(`Error: ${err.message}`);
    console.error(`Error: ${err.stack}`);
});

server.get('/', (req, res) => {
    res.send('Hello');
});

start();
