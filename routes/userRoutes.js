const express = require("express");
const router = express.Router();
const {createUser,getUser,getUserById,updateUser,deleteUser} = require('../controller/user')

router.post("/create", createUser);
router.get("/read", getUser);
router.get("/read/:id", getUserById);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router
