const { MongoClient } = require('mongodb'); // ES6 Destructuring
const config = require('../config');

const DB_URI = `mongodb://${config.database.host}:${config.database.port}`;
const client = new MongoClient(DB_URI, { useNewUrlParser: true });

async function connect () {
    await client.connect();
}

module.exports = {
    connect,
};
