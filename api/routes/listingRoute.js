const express = require('express');

const router = express.Router()

const {createListing} = require('../controllers/listingController.js')

router.post('/create', createListing)

module.exports = router