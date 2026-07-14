const Coupon = require("../models/coupon");

// ================= CREATE COUPON =================
const createCoupon = async (req, res) => {

    try {

        const coupon = await Coupon.create(req.body);

        res.status(201).json({
            success: true,
            message: "Coupon Created Successfully",
            data: coupon
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ================= GET ALL COUPONS =================
const getCoupons = async (req, res) => {

    try {

        const coupons = await Coupon.find();

        res.status(200).json({
            success: true,
            count: coupons.length,
            data: coupons
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createCoupon,
    getCoupons
};