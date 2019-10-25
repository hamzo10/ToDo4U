const { Router } = require('express');
const toDo = require('./toDo');

const router = Router();

// TODO: Split api / add info api-endpoint

router.post('/todos', toDo.new);
router.get('/todos', toDo.all);
router.patch('/todos/:id', toDo.update);
router.delete('/todos/:id', toDo.delete);

module.exports = router;
