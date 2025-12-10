/**
 * Database configuration using pg Pool
 * Uses environment variables for configuration
 * Exports a Pool instance for querying the database
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

const { Pool } = require('pg');
const _env = require('./env');

const pool = new Pool({
  connectionString: _env.DATABASE_URL,
  max: 20, // enterprise default pool size
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = { pool };