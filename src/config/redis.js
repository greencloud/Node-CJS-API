/**
 * Redis client configuration
 * Uses environment variables for configuration
 * Exports a Redis client instance for caching and session management
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

const { createClient } = require("redis");

const redis = createClient({
  url: process.env.REDIS_URL || "redis://127.0.0.1:6379"
});

// Handle errors
redis.on("error", (err) => {
  console.error("Redis error:", err);
});

// Connect once at app startup
redis.connect();

module.exports = redis;