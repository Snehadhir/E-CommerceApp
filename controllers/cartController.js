const Cart = require("../models/cart");

// ================= ADD TO CART =================
const addToCart = async (req, res) => {

    try {

        const { product, quantity } = req.body;

        console.log("User in addToCart:", req.user);

        console.log("Logged In User:", req.user);

        let cartItem = await Cart.findOne({
            user: req.user._id,
            product
        });

        if (cartItem) {

            cartItem.quantity += quantity;

            await cartItem.save();

            return res.status(200).json({
                success: true,
                message: "Cart Updated Successfully",
                data: cartItem
            });

        }

        cartItem = await Cart.create({
            user: req.user._id,
            product,
            quantity
        });

        res.status(201).json({
            success: true,
            message: "Product Added To Cart",
            data: cartItem
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ================= GET MY CART =================
// View My Cart
const getMyCart = async (req, res) => {

    try {

        console.log("Logged User:", req.user);

        const cart = await Cart.find({
            user: req.user._id
        })
        .populate("product")
        .populate("user", "name email");

        console.log("Cart Found:", cart);

        res.status(200).json({
            success: true,
            count: cart.length,
            data: cart
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ================= UPDATE CART =================
const updateCart = async (req, res) => {

    try {

        const { quantity } = req.body;

        const cart = await Cart.findById(req.params.id);

        if (!cart) {

            return res.status(404).json({
                success: false,
                message: "Cart Item Not Found"
            });

        }

        cart.quantity = quantity;

        await cart.save();

        res.status(200).json({
            success: true,
            message: "Cart Updated Successfully",
            data: cart
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ================= REMOVE FROM CART =================
const removeFromCart = async (req, res) => {

    try {

        const cart = await Cart.findById(req.params.id);

        if (!cart) {

            return res.status(404).json({
                success: false,
                message: "Cart Item Not Found"
            });

        }

        await cart.deleteOne();

        res.status(200).json({
            success: true,
            message: "Item Removed From Cart"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    addToCart,
    getMyCart,
    updateCart,
    removeFromCart
};