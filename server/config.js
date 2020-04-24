module.exports = {
    server: {
        port: 3000,
    },
    database: {
        host: 'localhost',
        port: 27017,
        name: 'ToDo4U',
        collections: {
            toDos: 'todos',
        },
    },
};
