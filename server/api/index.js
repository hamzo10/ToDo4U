const { Router } = require('express');
const router = Router();
const toDO = require('./toDo');

router.post('/new', toDO.new);

module.exports = router;
