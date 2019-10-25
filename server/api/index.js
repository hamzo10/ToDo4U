const { Router } = require('express');
const toDo = require('./toDo');

const router = Router();

// TODO: Split api / add info api-endpoint

router.post('/new', toDo.new);
router.get('/all', toDo.all);
router.patch('/:id', toDo.update);
router.delete('/:id', toDo.delete);

module.exports = router;
