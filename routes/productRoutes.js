const adminOnly = require("../middleware/adminMiddleware");

const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    updateStock,
    addReview
} = require("../controllers/productController");

router.post("/",protect,adminOnly, addProduct);

router.get("/", getProducts);

router.get("/:id", getProductById);

router.put("/:id",protect, adminOnly, updateProduct);

router.patch("/:id/stock",protect, adminOnly, updateStock);

router.delete("/:id",protect,adminOnly, deleteProduct);

router.post("/:id/reviews", protect, addReview);

module.exports = router;