const { Router } = require('express');
const toDo = require('./toDo');

const router = Router();

// TODO: Split api / add info api-endpoint

router.post('/', toDo.new);
router.get('/', toDo.all);
router.patch('/:id', toDo.update);
router.delete('/:id', toDo.delete);

module.exports = router;
