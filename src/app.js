/**
 * Express application setup file
 * Configures middleware for parsing request bodies
 *
 * This is part of the Node.js + Express CJS Template
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

const express = require('express');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const configureHelmet = require('./middleware/security/helmet.middleware');

const app = express();
configureHelmet(app);

// If behind a load balancer, enable trust proxy
//app.enable('trust proxy');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(limiter);

app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apply Helmet — must be before routes
configureHelmet(app);

module.exports = app;