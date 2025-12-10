/**
 * Product Model
 * Handles database operations related to products.
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

const { pool } = require('../config/database');

exports.AllProducts = async () => {
  try {
    const res = await pool.query('SELECT * FROM products ORDER BY id ASC');
    return res.rows;
  } catch (error) {
    console.error('Error fetching all products:', error.message);
  }
};

exports.GetProductById = async (id) => {
  try {
    const res = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    return res.rows[0];
  } catch (error) {
    console.error('Error fetching product by ID:', error.message);
  }
};

exports.CreateProduct = async (name, price) => {
  try {
    const res = await pool.query(
      'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *',
      [name, price]
    );
    return res.rows[0];
  } catch (error) {
    console.error('Error creating product:', error.message);
  }
};

exports.UpdateProduct = async (id, name, price) => {
  try {
    const res = await pool.query(
      'UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *',
      [name, price, id]
    );
    return res.rows[0];
  } catch (error) {
    console.error('Error updating product:', error.message);
  }
};

exports.DeleteProduct = async (id) => {
  try {
    const res = await pool.query(
      'DELETE FROM products WHERE id = $1 RETURNING *',
      [id]
    );
    return res.rows[0];
  } catch (error) {
    console.error('Error deleting product:', error.message);
  }
};