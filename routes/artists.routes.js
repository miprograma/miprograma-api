const express = require('express');
const router = express.Router();

const uploader = require('../configs/storage.config');
const secure = require('../middlewares/secure.middle');

artistsController = require('../controllers/artists.controller');

router.get('/', artistsController.list);
router.post('/', uploader.single('attachment'), artistsController.create);
router.put('/:id', uploader.single('attachment'), artistsController.update);
router.delete('/:id', artistsController.delete);

module.exports = router;


//, secure.isAuthenticated <---- Para cuando me meta en esto.

