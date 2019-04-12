const express = require('express');
const router = express.Router();

// const uploader = require('../configs/storage.config');
// const secure = require('../middlewares/secure.middle');

activePerformanceController = require('../controllers/activePerformance.controller');

// router.get('/', activePerformanceController.list);
// router.post('/', uploader.single('attachment'), activePerformanceController.create);
router.put('/:id', activePerformanceController.update);
// router.delete('/:id', activePerformanceController.delete);

module.exports = router;