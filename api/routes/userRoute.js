const express = require("express");

const router = express.Router();
const { verifyToken } = require("../utils/verifyToken");
const { updateUser , deleteUser, getUserListings} = require("../controllers/userController");

router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings)


module.exports = router;
