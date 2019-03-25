const express = require('express');
const router = express.Router();

const secure = require('../middlewares/secure.middle');
const authcontroller = require('../controllers/auth.controller');

router.post('/admin', secure, authcontroller.isAdmin); //< para verificar si está autenticado? o lo gestiono con los roles?
