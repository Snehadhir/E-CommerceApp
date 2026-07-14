# 🛒 Small Business E-Commerce Backend

A complete backend for an online shopping platform built using Node.js, Express.js, MongoDB, and JWT Authentication.

## 🚀 Live API

https://e-commerceapp-ll94.onrender.com

## 📂 GitHub Repository

https://github.com/Snehadhir/E-CommerceApp

---

## Features

- User Registration & Login
- JWT Authentication
- Role-based Authorization (Admin/User)
- Product Management
- Category Management
- Shopping Cart
- Wishlist
- Coupon System
- Order Management
- Inventory Management
- Product Reviews & Ratings
- GST Calculation
- MongoDB Atlas Integration
- REST APIs
- Cloud Deployment (Render)

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- Render
- GitHub

---

## Installation

```bash
git clone https://github.com/Snehadhir/E-CommerceApp.git
cd E-CommerceApp
npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URI=Your_MongoDB_URI
JWT_SECRET=Your_JWT_SECRET
```

Run

```bash
npm run dev
```

---

## API Endpoints

### Authentication

POST /api/users/register

POST /api/users/login

---

### Products

GET /api/products

GET /api/products/:id

POST /api/products

PUT /api/products/:id

DELETE /api/products/:id

PATCH /api/products/:id/stock

POST /api/products/:id/reviews

---

### Categories

GET /api/categories

POST /api/categories

PUT /api/categories/:id

DELETE /api/categories/:id

---

### Cart

GET /api/cart

POST /api/cart

PUT /api/cart/:id

DELETE /api/cart/:id

---

### Wishlist

GET /api/wishlist

POST /api/wishlist

DELETE /api/wishlist/:id

---

### Orders

POST /api/orders

GET /api/orders/my

GET /api/orders

PATCH /api/orders/:id/status

---

### Coupons

POST /api/coupons

GET /api/coupons

PUT /api/coupons/:id

DELETE /api/coupons/:id

---

## Author

Sneha Dhir

B.Tech CSE (AIML)

UPES, Dehradun