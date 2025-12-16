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
  NODE_ENV: process.env.NODE_ENV,

  PORT: process.env.PORT,

  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY,
  SKIP_JWT_VALIDATION: process.env.SKIP_JWT_VALIDATION,

  DATABASE_URL: process.env.DATABASE_URL,

  REDIS_URL: process.env.REDIS_URL,

  OPEN_API_KEY: process.env.OPEN_API_KEY,
};