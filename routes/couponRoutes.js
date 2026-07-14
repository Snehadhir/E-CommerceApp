const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const {
    createCoupon,
    getCoupons
} = require("../controllers/couponController");

// Create Coupon (Admin Only)
router.post("/", protect, adminOnly, createCoupon);

// Get All Coupons
router.get("/", getCoupons);

module.exports = router;