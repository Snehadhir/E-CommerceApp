const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            quantity: Number
        }
    ],

    totalAmount: {
        type: Number,
        required: true
    },

    gst: {
        type: Number,
        default: 18
    },

    orderStatus: {
        type: String,
        enum: [
            "Pending",
            "Confirmed",
            "Shipped",
            "Delivered",
            "Cancelled"
        ],
        default: "Pending"
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Order", orderSchema);