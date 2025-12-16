
/**
 * Middleware for validating request data using Joi schemas.
 * Exports a function that takes a Joi schema and returns a middleware function.
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

const Joi = require("joi");

module.exports = schema => {
  return (req, res, next) => {
    const data = {
      params: req.params,
      query: req.query,
      body: req.body,
      headers: req.headers
    };

    const { error } = schema.validate(data, {
      abortEarly: false,     // return all errors
      allowUnknown: true,    // allow extra fields unless strict mode
      stripUnknown: false    // do not remove unknown fields by default
    });

    if (error) {
      return res.status(400).json({
        status: "validation_error",
        details: error.details.map(d => d.message)
      });
    }

    next();
  };
};
