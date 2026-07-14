# 🛒 Small Business E-Commerce Backend

A production-ready RESTful backend for a Small Business E-Commerce platform built with **Node.js**, **Express.js**, **MongoDB Atlas**, and **JWT Authentication**.

The project provides secure authentication, product management, shopping cart, wishlist, coupon management, order processing, inventory management, and role-based authorization.

---

## 🌐 Live Demo

**Backend API**

https://e-commerceapp-ll94.onrender.com

---

## 📂 GitHub Repository

https://github.com/Snehadhir/E-CommerceApp

---

# 🚀 Features

### 🔐 Authentication & Authorization
- User Registration
- User Login
- JWT Authentication
- Password Encryption using bcrypt
- Role-based Authorization (Admin/User)

### 📦 Product Management
- Add Product
- Update Product
- Delete Product
- Get All Products
- Get Product by ID
- Update Product Stock
- Product Reviews & Ratings

### 🗂 Category Management
- Add Category
- Update Category
- Delete Category
- Get Categories

### 🛒 Shopping Cart
- Add to Cart
- View Cart
- Update Cart Quantity
- Remove Item from Cart

### ❤️ Wishlist
- Add to Wishlist
- View Wishlist
- Remove from Wishlist

### 🎟 Coupon Management
- Create Coupon
- Update Coupon
- Delete Coupon
- Apply Coupon

### 📦 Order Management
- Create Order
- View User Orders
- View All Orders (Admin)
- Update Order Status

### 💰 Pricing Engine
- GST Calculation
- Coupon Discount Support
- Final Amount Calculation

### ☁ Deployment
- MongoDB Atlas
- Render Cloud Deployment
- GitHub Version Control

---

# 🛠 Tech Stack

| Technology | Usage |
|------------|-------|
| Node.js | Backend Runtime |
| Express.js | REST API Framework |
| MongoDB Atlas | Cloud Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcryptjs | Password Encryption |
| Render | Deployment |
| GitHub | Version Control |
| Postman | API Testing |

---

# 📁 Project Structure

```
E-CommerceApp
│
├── config
├── controllers
├── middleware
├── models
├── routes
├── services
├── uploads
├── utils
├── validations
├── app.js
├── server.js
├── package.json
└── README.md
```

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/Snehadhir/E-CommerceApp.git
```

Go to the project directory

```bash
cd E-CommerceApp
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
```

Run the server

```bash
npm run dev
```

---

# 📌 API Endpoints

## Authentication

| Method | Endpoint |
|--------|----------|
| POST | `/api/users/register` |
| POST | `/api/users/login` |

---

## Products

| Method | Endpoint |
|--------|----------|
| GET | `/api/products` |
| GET | `/api/products/:id` |
| POST | `/api/products` |
| PUT | `/api/products/:id` |
| PATCH | `/api/products/:id/stock` |
| DELETE | `/api/products/:id` |
| POST | `/api/products/:id/reviews` |

---

## Categories

| Method | Endpoint |
|--------|----------|
| GET | `/api/categories` |
| POST | `/api/categories` |
| PUT | `/api/categories/:id` |
| DELETE | `/api/categories/:id` |

---

## Cart

| Method | Endpoint |
|--------|----------|
| GET | `/api/cart` |
| POST | `/api/cart` |
| PUT | `/api/cart/:id` |
| DELETE | `/api/cart/:id` |

---

## Wishlist

| Method | Endpoint |
|--------|----------|
| GET | `/api/wishlist` |
| POST | `/api/wishlist` |
| DELETE | `/api/wishlist/:id` |

---

## Orders

| Method | Endpoint |
|--------|----------|
| POST | `/api/orders` |
| GET | `/api/orders/my` |
| GET | `/api/orders` |
| PATCH | `/api/orders/:id/status` |

---

## Coupons

| Method | Endpoint |
|--------|----------|
| GET | `/api/coupons` |
| POST | `/api/coupons` |
| PUT | `/api/coupons/:id` |
| DELETE | `/api/coupons/:id` |

---

# 🔒 Authentication

Protected routes require a JWT token.

Example:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 🧪 API Testing

All APIs were tested using **Postman**.

A Postman Collection is included in this repository.

---

# 🌍 Deployment

**Live Backend**

https://e-commerceapp-ll94.onrender.com

---

# 👩‍💻 Author

**Sneha Dhir**

B.Tech Computer Science Engineering (AI & ML)

University of Petroleum and Energy Studies (UPES), Dehradun

---

## ⭐ If you found this project useful, consider giving it a star on GitHub!