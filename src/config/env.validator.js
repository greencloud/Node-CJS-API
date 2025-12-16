/**
 * Environment variable validation using Joi.
 * Ensures required variables are present and correctly formatted.
 * Exports validated environment variables.
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

const Joi = require("joi");

const envSchema = Joi.object({
  PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string().uri().required(),
  NODE_ENV: Joi.string().valid("development", "staging", "production").required(),
}).unknown(true);

const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Environment validation error: ${error.message}`);
}

module.exports = envVars;