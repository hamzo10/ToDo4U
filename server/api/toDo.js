const database = require('../database');
const { database: { collections } } = require('../../config'); // Destructure

const api = {};

api.new = async (req, res) => {
    const db = database.get();
    const collection = db.collection(collections.toDos);

    try {
        const { insertedId } = await collection.insertOne(req.body);
        res.send(insertedId);
    } catch (err) {
        // TODO: error handler
        res.send(err);
    }
};

api.all = async (req, res) => {
    const db = database.get();
    const collection = db.collection(collections.toDos);

    try {
        const all = await collection.find().toArray();
        res.send(all);
    } catch (err) {
        // TODO: error handler
        res.send(err);
    }
};

module.exports = api;
