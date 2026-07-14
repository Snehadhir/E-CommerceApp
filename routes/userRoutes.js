const express = require("express");

const router = express.Router();

const {
    registerUser,
    loginUser,
    getProfile,
    updateProfile,
    changePassword,
    forgotPassword
} = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/forgot-password", forgotPassword);

const protect = require("../middleware/authMiddleware");

router.put("/profile", protect, updateProfile);

router.get("/profile", protect, getProfile);

router.put("/change-password", protect, changePassword);
module.exports = router;