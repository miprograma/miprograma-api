const express = require('express');
const router = express.Router();

const secure = require('../middlewares/secure.middle');

showsController = require('../controllers/shows.controller');

router.get('/', showsController.list);
router.post('/', showsController.create);
router.put('/:id', showsController.update);
router.delete('/:id', showsController.delete);

module.exports = router;

// secure.isAuthenticated,