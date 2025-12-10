/**
 * Product Controller
 * Handles product-related operations and responses.
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

const productModel = require('../models/product.model');

exports.getAllProducts = async (req, res) => {
  const products = await productModel.AllProducts();

  res.status(200).json(products);
};

exports.getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await productModel.GetProductById(id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

exports.createProduct = async (req, res) => {
  const { name, price } = req.body;
  const newProduct = await productModel.CreateProduct(name, price);

  res.status(201).json(newProduct);
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;
  const updatedProduct = await productModel.UpdateProduct(id, name, price);

  if (updatedProduct) {
    res.status(200).json(updatedProduct);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  const deletedProduct = await productModel.DeleteProduct(id);

  if (deletedProduct) {
    res.status(200).json(deletedProduct);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};