const { Router } = require('express');
const router = Router();
const toDO = require('./toDo');

router.get('/new', toDO.new);

module.exports = router;
