const database = require('../database');
const { ObjectId } = require('mongodb');
const { database: { collections } } = require('../../config'); // Destructure

const api = {};

api.new = async (req, res, next) => {
    const db = database.get();
    const collection = db.collection(collections.toDos);

    try {
        const { insertedId } = await collection.insertOne(req.body);
        res.send(insertedId);
    } catch (err) {
        next(err);
    }
};

api.all = async (req, res, next) => {
    const db = database.get();
    const collection = db.collection(collections.toDos);

    try {
        const all = await collection.find().toArray();
        res.send(all);
    } catch (err) {
        next(err);
    }
};

api.update = async (req, res, next) => {
    const db = database.get();
    const collection = db.collection(collections.toDos);

    try {
        const id = req.params.id; // Id ist ein Parameter und wird Variable ersetzt
        const filter = {
            _id: new ObjectId(id),
        };

        const update = {
            $set: req.body,
        };

        const result = await collection.updateOne(filter, update); // erste Param ist welches ToDo geändert werden muss 2 Param ist das Update
        res.send(result);
    } catch (err) {
        next(err);
    }
};

api.delete = async (req, res, next) => {
    const db = database.get();
    const collection = db.collection(collections.toDos);

    try {
        const id = req.params.id;
        const filter = {
            _id: new ObjectId(id),
        };

        const result = await collection.deleteOne(filter);
        res.send(result);
    } catch (err) {
        next(err);
    }
};

module.exports = api;
