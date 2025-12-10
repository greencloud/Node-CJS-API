/**
 * Main router file that mounts all other route files
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

const express = require("express");
const router = express.Router();
const _default = require("../controllers/default.controller");

// Mount routers
router.use('/', require('./product.route'));
router.use('/', require('./user.route'));

// Catch-all 404
//router.get('/*', _default.notFound);

module.exports = router;
