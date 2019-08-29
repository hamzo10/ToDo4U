const { MongoClient } = require('mongodb'); // ES6 Destrucutring
const databaseConfig = require('../config');

const DB_URI = `mongodb://${databaseConfig.host}:${databaseConfig.port}`;
const client = new MongoClient(DB_URI, { useNewUrlParser: true });


async function connect () {
        await client.connect();
}

module.exports = {
    connect
};
