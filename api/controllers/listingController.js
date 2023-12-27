
const Listing = require('../models/listingModel')
const errorHandler = require('../utils/errors')
const createListing = async (req, res, next) => {
    
    try{
        const listing = await Listing.create(req.body);
        return res.status(200).json(listing)
    }catch(error){
        next(error)
    }
}

const deleteListing = async (req, res, next) => {
    try{
        const listing = await Listing.findById(req.params.id);
        if(!listing) return next(errorHandler(404, "No listing found"));
        if(req.user.id !== listing.userRef.toString()) return next(errorHandler(401, 'You can only delete your own listings!'));
        await Listing.findByIdAndDelete(req.params.id)
        res.status(200).json({'message': 'Deleted Successfully'})
    }catch(error){
        next(error);
    }
}

const updateListing = async (req, res, next) => {
    try {
        const listing = await Listing.findById(req.params.id)
        if(!listing) return next(errorHandler(404, 'Listing not found'))

        if(req.user.id !== listing.userRef) return next(errorHandler(401, 'You can only update your own listings'))

        const updatedListing = await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )

        res.status(201).json(updatedListing)

    } catch (error) {
        next(error);
    }
}

const getListing = async (req, res, next) => {
try {
    const listing = await Listing.findById(req.params.id);
    if(!listing) {
        return next(errorHandler(404, 'Not Found'))
    }
    res.status(200).json(listing)
} catch (error) {
    next(error);
}
}
module.exports = {createListing, deleteListing, updateListing, getListing}