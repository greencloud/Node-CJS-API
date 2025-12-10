/**
 * User Controller
 * Handles user-related operations and responses.
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

const redis = require('../config/redis');
const userModel = require("../models/user.model");

/**
 * Test implementation of Redis caching for all users endpoint.
 *
 * @param {*} _req
 * @param {*} res
 * @returns
 */
exports.getAllUsers = async (_req, res) => {
  try {
    const cache = await redis.get("users");

    if (cache) {
      return res.json({
        source: "cache",
        data: JSON.parse(cache)
      });
    }

    const rows = await userModel.getAllUsers();

    // For redis@4.x, set with expiration: redis.setEx(key, seconds, value)
     await redis.setEx("users", 60, JSON.stringify(rows)); // 60 seconds

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await userModel.getUserById(id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  const newUser = await userModel.createUser(name, email);

  res.status(201).json(newUser);
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const updatedUser = await userModel.updateUser(id, name, email);

  if (updatedUser) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ error: "User not found" });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const deletedUser = await userModel.deleteUser(id);

  if (deletedUser) {
    res.status(200).json(deletedUser);
  } else {
    res.status(404).json({ error: "User not found" });
  }
};
