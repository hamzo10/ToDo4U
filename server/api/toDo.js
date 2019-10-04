const database = require('../database');

const api = {};

api.new = async (req, res) => {
    const db = database.get();
    const collection = db.collection('todos');

    try {
        const { insertedId } = await collection.insertOne(req.body);
        res.send(insertedId);
    } catch (err) {
        res.send(err);
    }
};

api.all = (req, res) => {
    const db = database.get();
    const collection = db.collection('todos');

    try {
        const all = collection.find().toArray();
        res.send(all);
    } catch (err) {
        res.send(err);
    }
};

module.exports = api;
