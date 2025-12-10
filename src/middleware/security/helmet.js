/**
 * Helmet security middleware configuration
 * Sets various HTTP headers to enhance security using Helmet library
 * Exports a function to configure Helmet for an Express app instance
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */
const helmet = require("helmet");

module.exports = function configureHelmet(app) {
  const isProd = process.env.NODE_ENV === "production";

  app.use(
    helmet({
      // Content-Security-Policy (CSP)
      contentSecurityPolicy: isProd
        ? {
            useDefaults: true,
            directives: {
              defaultSrc: ["'none'"],
              frameAncestors: ["'none'"],
              scriptSrc: ["'self'"],
              connectSrc: ["'self'"],
              imgSrc: ["'self'", "data:"],
              styleSrc: ["'self'"],
              baseUri: ["'none'"],
              formAction: ["'none'"],
            },
          }
        : false, // disable CSP in dev for convenience

      // HSTS: Only enable in production over HTTPS
      hsts: isProd
        ? {
            maxAge: 63072000, // 2 years
            includeSubDomains: true,
            preload: true,
          }
        : false,

      // Prevent other sites from embedding/using your resources
      crossOriginResourcePolicy: { policy: "same-origin" },

      // Isolate browsing context
      crossOriginOpenerPolicy: { policy: "same-origin" },

      // Require CORS headers on embed resources
      crossOriginEmbedderPolicy: { policy: "require-corp" },

      // Prevent MIME sniffing
      noSniff: true,

      // Prevent clickjacking
      frameguard: { action: "deny" },

      // Hide "X-Powered-By"
      hidePoweredBy: true,

      // Disable DNS prefetching
      dnsPrefetchControl: { allow: false },

      // Legacy XSS filter (modern browsers ignore this)
      xssFilter: false,
    })
  );
};
