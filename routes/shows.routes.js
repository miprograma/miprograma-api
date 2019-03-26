const express = require('express');
const router = express.Router();

const secure = require('../middlewares/secure.middle');

showsController = require('../controllers/shows.controller');

router.get('/', secure.isAuthenticated, showsController.list);
router.post('/', secure.isAuthenticated, showsController.create);
router.put('/:id', secure.isAuthenticated, showsController.update);
router.delete('/:id', secure.isAuthenticated, showsController.delete);

module.exports = router;