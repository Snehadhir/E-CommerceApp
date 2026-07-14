const Wishlist = require("../models/wishlist");

// ================= ADD TO WISHLIST =================
const addToWishlist = async (req, res) => {

    try {

        const { product } = req.body;

        // Check if already exists
        const exists = await Wishlist.findOne({
            user: req.user.id,
            product
        });

        if (exists) {
            return res.status(400).json({
                success: false,
                message: "Product already in wishlist"
            });
        }

        const wishlist = await Wishlist.create({
            user: req.user.id,
            product
        });

        res.status(201).json({
            success: true,
            message: "Product Added To Wishlist",
            data: wishlist
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
// ================= VIEW WISHLIST =================
const getWishlist = async (req, res) => {

    try {

        const wishlist = await Wishlist.find({
            user: req.user.id
        })
        .populate("product");

        res.status(200).json({
            success: true,
            count: wishlist.length,
            data: wishlist
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ================= REMOVE FROM WISHLIST =================
const removeFromWishlist = async (req, res) => {

    try {

        const wishlist = await Wishlist.findByIdAndDelete(req.params.id);

        if (!wishlist) {
            return res.status(404).json({
                success: false,
                message: "Wishlist Item Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product Removed From Wishlist"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    addToWishlist,
    getWishlist,
    removeFromWishlist
};