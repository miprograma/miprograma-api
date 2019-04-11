const express = require('express');
const router = express.Router();

const secure = require('../middlewares/secure.middle');

showsController = require('../controllers/shows.controller');

router.get('/all', showsController.list);
router.get('/', showsController.getByDate);
router.put('/:id', showsController.update);
router.put('/:id/sessions/current', showsController.setCurrent)
router.put('/:id/sessions/:sessionIndex', showsController.updateSession);
router.delete('/:id', showsController.delete);

module.exports = router;

// secure.isAuthenticated,