const { Router } = require('express');
const toDo = require('./toDo');

const router = Router();

// TODO: Split api / add info api-endpoint

router.post('/new', toDo.new);

router.get('/all', toDo.all);

router.patch('/update/:id', toDo.update);

// TODO: Add delete todo api-endpoint

module.exports = router;
