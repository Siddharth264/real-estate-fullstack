const express = require("express");

const router = express.Router();
const { verifyToken } = require("../utils/verifyToken");
const { updateUser , deleteUser} = require("../controllers/userController");

router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);


module.exports = router;
