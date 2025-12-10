/**
 * User routes
 * Defines API endpoints for user operations.
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/api/all-users", userController.getAllUsers);
router.get("/api/user/:id", userController.getUserById);
router.post("/api/user", userController.createUser);
router.put("/api/user/:id", userController.updateUser);
router.delete("/api/user/:id", userController.deleteUser);

module.exports = router;