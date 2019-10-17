const { MongoClient } = require('mongodb'); // ES6 Destructuring
const config = require('../config');

const DB_URI = `mongodb://${config.database.host}:${config.database.port}`;
const client = new MongoClient(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function connect () {
    await client.connect();
}

function get () {
    return client.db(config.database.name);
}

module.exports = {
    connect,
    get,
};
