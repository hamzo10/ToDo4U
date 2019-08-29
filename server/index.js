// Dateien im Projekt werden required
// TODO: 08.08.2019 Datenbank <-(MongoClient)-> Backend <-(API)-> Frontend
const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const database = require('./database');

const server = express();

async function start () {
    try {
        await database.connect();
        server.listen(3000, () => {
            console.log('Server started on port 3000');
        });
    } catch (err) {
        console.error(err);
    }
}

server.use(bodyParser.json());

server.use('/api', api);

server.get('/', (req, res) => {
    res.send('Hello');
});

start();
