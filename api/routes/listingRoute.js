const express = require('express');

const router = express.Router()

const {createListing, deleteListing, updateListing, getListing,getListings} = require('../controllers/listingController.js');
const { verifyToken } = require('../utils/verifyToken.js');

router.post('/create', createListing)
router.delete('/delete/:id', verifyToken ,deleteListing)
router.post('/update/:id', verifyToken ,updateListing)
router.get('/get/:id' ,getListing)
router.get('/get', getListings)

module.exports = router