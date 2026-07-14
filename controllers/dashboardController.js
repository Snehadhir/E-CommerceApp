const User = require("../models/user");
const Product = require("../models/product");
const Category = require("../models/category");
const Order = require("../models/order");

// ================= ADMIN DASHBOARD =================
const getDashboard = async (req, res) => {

    try {

        const totalUsers = await User.countDocuments();

        const totalProducts = await Product.countDocuments();

        const totalCategories = await Category.countDocuments();

        const totalOrders = await Order.countDocuments();

        const revenue = await Order.aggregate([
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: "$totalAmount" }
                }
            }
        ]);

        res.status(200).json({
            success: true,
            data: {
                totalUsers,
                totalProducts,
                totalCategories,
                totalOrders,
                totalRevenue:
                    revenue.length > 0 ? revenue[0].totalRevenue : 0
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    getDashboard
};