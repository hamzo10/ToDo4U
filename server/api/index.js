const { Router } = require('express');
const router = Router();

router.get('/new', (req, res) => {
    res.send('new');
});

module.exports = router;
