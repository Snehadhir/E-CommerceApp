const express = require("express");

const router = express.Router();

// Import Middleware
const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

// Import Controllers
const {
    placeOrder,
    getMyOrders,
    updateOrderStatus,
    cancelOrder
} = require("../controllers/orderController");

// Routes
router.post("/", protect, placeOrder);

router.get("/", protect, getMyOrders);

router.patch("/:id/status", protect, adminOnly, updateOrderStatus);

router.patch("/:id/cancel", protect, cancelOrder);

module.exports = router;