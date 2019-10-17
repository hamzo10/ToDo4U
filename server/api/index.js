const { Router } = require('express');
const toDo = require('./toDo');

const router = Router();

router.post('/new', toDo.new);

router.get('/all', toDo.all);

router.patch('/update/:id', toDo.update);

module.exports = router;
