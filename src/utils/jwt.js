/**
 * JWT utility functions
 * Functions to generate and verify JWT tokens for API authentication.
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

const jwt = require("jsonwebtoken");
const _env = require("../config/env");

exports.generateAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    _env.JWT_SECRET,
    { expiresIn: "15m" }
  );
};

exports.generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.id },
    _env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

exports.verifyRefreshToken = (token) => {
  return jwt.verify(token, _env.JWT_SECRET);
};