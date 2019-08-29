const { Router } = require('express');
const toDo = require('./toDo');

const router = Router();

router.post('/new', toDo.new);

module.exports = router;
