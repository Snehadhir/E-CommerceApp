const express = require("express");

const app = express();

// Middleware
app.use(express.json());

app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/wishlist", require("./routes/wishlistRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));
app.use("/api/coupons", require("./routes/couponRoutes"));

// Test Route
app.get("/", (req, res) => {
    res.send("🚀 E-Commerce Backend API is Running...");
});

module.exports = app;