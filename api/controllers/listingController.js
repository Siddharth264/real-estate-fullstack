const Listing = require('../models/listingModel')

const createListing = async (req, res, next) => {
    
    try{
        const listing = await Listing.create(req.body);
        return res.status(200).json(listing)
    }catch(error){
        next(error)
    }
}

module.exports = {createListing}