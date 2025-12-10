/**
 * User Model
 * Handles database operations related to users.
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

const { pool } = require('../config/database');

exports.getAllUsers = async () => {
  try {
    const res = await pool.query('SELECT * FROM users ORDER BY id ASC');
    return res.rows;
  } catch (error) {
    console.error('Error fetching all users:', error.message);
  }
};

exports.getUserById = async (id) => {
  try {
    const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.rows[0];
  } catch (error) {
    console.error('Error fetching user by ID:', error.message);
  }
};

exports.createUser = async (name, email) => {
  try {
    const res = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    return res.rows[0];
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
};

exports.updateUser = async (id, name, email) => {
  try {
    const res = await pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id]
    );
    return res.rows[0];
  } catch (error) {
    console.error('Error updating user:', error.message);
  }
};

exports.deleteUser = async (id) => {
  try {
    const res = await pool.query(
      'DELETE FROM users WHERE id = $1 RETURNING *',
      [id]
    );
    return res.rows[0];
  } catch (error) {
    console.error('Error deleting user:', error.message);
  }
};