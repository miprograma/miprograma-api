const express = require('express');
const router = express.Router();

const secure = require('../middlewares/secure.middle');
const authcontroller = require('../controllers/auth.controller');

router.get('/', authcontroller.isAdmin); //< para verificar si está autenticado? o lo gestiono con los roles?

module.exports = router;