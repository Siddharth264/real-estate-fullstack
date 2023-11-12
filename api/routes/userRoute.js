const express = require('express');

const router = express.Router();

const { updateUser } = require('../controllers/userController')

router.post('/update/:id',updateUser )

module.exports = router