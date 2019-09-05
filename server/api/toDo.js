const database = require('../database');

const api = {};

api.new = (req, res) => {
    res.send(req.body);
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
