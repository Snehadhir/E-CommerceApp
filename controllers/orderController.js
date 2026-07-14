const Cart = require("../models/cart");
const Order = require("../models/order");
const Product = require("../models/product");
const Coupon = require("../models/coupon");

// Place Order
const placeOrder = async (req, res) => {

    try {

        const cartItems = await Cart.find({
            user: req.user.id
        }).populate("product");

        if (cartItems.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Cart is Empty"
            });
        }

        let total = 0;

        const products = [];

        for (const item of cartItems) {

            total += item.product.price * item.quantity;

            products.push({
                product: item.product._id,
                quantity: item.quantity
            });

            // Reduce Stock
            item.product.stock -= item.quantity;
            await item.product.save();

        }

        let discount = 0;

// Coupon Logic
if (req.body.couponCode) {

    const coupon = await Coupon.findOne({
        code: req.body.couponCode.toUpperCase(),
        isActive: true
    });

    if (!coupon) {
        return res.status(400).json({
            success: false,
            message: "Invalid Coupon"
        });
    }

    if (coupon.expiryDate < new Date()) {
        return res.status(400).json({
            success: false,
            message: "Coupon Expired"
        });
    }

    discount = (total * coupon.discount) / 100;
}

const discountedPrice = total - discount;

const gst = discountedPrice * 0.18;

const finalAmount = discountedPrice + gst;

        const order = await Order.create({
            user: req.user.id,
            products,
            totalAmount: finalAmount,
            gst
        });
        console.log("Order Saved:", order);
        // Clear Cart
        await Cart.deleteMany({
            user: req.user.id
        });

        res.status(201).json({
            success: true,
            message: "Order Placed Successfully",
            data: {
                    order,
                    originalAmount: total,
                    discount,
                    gst,
                    finalAmount
                }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// View My Orders
const getMyOrders = async (req, res) => {

    try {

        const orders = await Order.find({
            user: req.user.id
        })
        .populate("user", "name email")
        .populate("products.product");

        res.status(200).json({
            success: true,
            count: orders.length,
            data: orders
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
// Update Order Status (Admin)
const updateOrderStatus = async (req, res) => {

    try {

        const { orderStatus } = req.body;

        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order Not Found"
            });
        }

        order.orderStatus = orderStatus;

        await order.save();

        res.status(200).json({
            success: true,
            message: "Order Status Updated Successfully",
            data: order
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
// Cancel Order
const cancelOrder = async (req, res) => {

    try {

        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order Not Found"
            });
        }

        if (order.orderStatus === "Delivered") {
            return res.status(400).json({
                success: false,
                message: "Delivered Order Cannot Be Cancelled"
            });
        }

        order.orderStatus = "Cancelled";

        await order.save();

        res.status(200).json({
            success: true,
            message: "Order Cancelled Successfully",
            data: order
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
module.exports = {
    placeOrder,
    getMyOrders,
    updateOrderStatus,
    cancelOrder
};