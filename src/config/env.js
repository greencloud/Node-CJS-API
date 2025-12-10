/**
 * Environment configuration
 * Loads environment variables from .env file
 * Exports configuration constants
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  DATABASE_URL: process.env.DATABASE_URL
};