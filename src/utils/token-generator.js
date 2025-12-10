/**
 * Token generator script
 * Generates a long-lived JWT token for API authentication
 * Prints the token to the console
 *
 * To generate a token, run: npm run token
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

const jwt = require("jsonwebtoken");
const _env = require("../config/env");
const ttl = '365d'; // long-lived

const token = jwt.sign(
  { app: "node-cjs-api" },
  _env.JWT_SECRET,
  { expiresIn: ttl }
);

console.log("API TOKEN:", token);
