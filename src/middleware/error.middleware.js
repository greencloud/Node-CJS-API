/**
 * Error-handling middleware for Express applications
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

/**
 * Error-handling middleware function
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

// Global error-handling middleware for Express
module.exports.errorHandler = (err, req, res, next) => {
    console.error("[ERROR]", err);

    // Custom error codes (optional: Corporate standardization)
    const status = err.status || 500;

    res.status(status).json({
        success: false,
        message: err.message || "Internal Server Error",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    });
};
