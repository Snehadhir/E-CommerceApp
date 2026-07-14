const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    addToCart,
    getMyCart,
    updateCart,
    removeFromCart
} = require("../controllers/cartController");

router.post("/", protect, addToCart);

router.get("/", protect, getMyCart);

router.put("/:id", protect, updateCart);

router.delete("/:id", protect, removeFromCart);

module.exports = router;