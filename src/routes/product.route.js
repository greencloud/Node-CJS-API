/**
 * Product routes
 * Defines API endpoints for product operations.
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

const express = require("express");
const router = express.Router();
const { apiAuth } = require('../middleware/apiauth.middleware');
const productController = require("../controllers/product.controller");

router.get("/api/all-products", apiAuth, productController.getAllProducts);
router.get("/api/product/:id", apiAuth, productController.getProductById);
router.post("/api/product", apiAuth, productController.createProduct);
router.put("/api/product/:id", apiAuth, productController.updateProduct);
router.delete("/api/product/:id", apiAuth, productController.deleteProduct);

module.exports = router;