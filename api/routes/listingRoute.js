const express = require('express');

const router = express.Router()

const {createListing, deleteListing, updateListing, getListing} = require('../controllers/listingController.js');
const { verifyToken } = require('../utils/verifyToken.js');

router.post('/create', createListing)
router.delete('/delete/:id', verifyToken ,deleteListing)
router.post('/update/:id', verifyToken ,updateListing)
router.get('/get/:id' ,getListing)

module.exports = router