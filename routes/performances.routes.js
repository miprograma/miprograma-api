const express = require('express');
const router = express.Router();

const secure = require('../middlewares/secure.middle');
performancesController = require('../controllers/performances.controller');

router.get('/', performancesController.list);
router.post('/', performancesController.create);
router.put('/:id', performancesController.update);
router.delete('/:id', performancesController.delete);

module.exports = router;


// secure.isAuthenticated,