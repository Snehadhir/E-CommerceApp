const Product = require("../models/product");

// Add Product
const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);

        res.status(201).json({
            success: true,
            message: "Product Added Successfully",
            data: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Products
// Get All Products + Search
// Get All Products + Search + Filter
const getProducts = async (req, res) => {

    try {

        const filter = {};

        // Search by Product Name
        if (req.query.keyword) {
            filter.name = {
                $regex: req.query.keyword,
                $options: "i"
            };
        }

        // Filter by Category
        if (req.query.category) {
            filter.category = req.query.category;
        }

        const products = await Product.find(filter)
            .populate("category");

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get Product By ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate("category");

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update Product
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product Updated Successfully",
            data: product
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Delete Product
const deleteProduct = async (req, res) => {
    try {

        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
// Update Stock
const updateStock = async (req, res) => {

    try {

        const { stock } = req.body;

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product Not Found"
            });
        }

        product.stock = stock;

        await product.save();

        let status = "In Stock";

        if (stock === 0) {
            status = "Out Of Stock";
        } else if (stock <= 5) {
            status = "Low Stock";
        }

        res.status(200).json({
            success: true,
            message: "Stock Updated Successfully",
            stock: product.stock,
            status
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
// ================= ADD PRODUCT REVIEW =================
const addReview = async (req, res) => {

    try {

        const { rating, comment } = req.body;

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product Not Found"
            });
        }

        // Check if user already reviewed
        const alreadyReviewed = product.reviews.find(
            review => review.user.toString() === req.user.id
        );

        if (alreadyReviewed) {
            return res.status(400).json({
                success: false,
                message: "Product Already Reviewed"
            });
        }

        const review = {
            user: req.user.id,
            name: req.user.name,
            rating: Number(rating),
            comment
        };

        product.reviews.push(review);

        product.numReviews = product.reviews.length;

        product.rating =
            product.reviews.reduce((acc, item) => acc + item.rating, 0) /
            product.reviews.length;

        await product.save();

        res.status(201).json({
            success: true,
            message: "Review Added Successfully",
            data: product
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    updateStock,
    addReview
};