const express = require('express');

const router = express.Router();

const { test } = require('../controllers/userController')

router.get('/test',test)

module.exports = router