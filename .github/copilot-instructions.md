# Copilot Instructions for Node-CJS-API

## Project Overview
This is a Node.js backend API using CommonJS modules. The main entry point is `src/server.js`, which loads the application from `src/app.js`. The project is structured by feature, with controllers, models, routes, middleware, and utilities separated into their respective directories under `src/`.

## Architecture & Data Flow
- **Entry Point:** `src/server.js` starts the server and loads `src/app.js`.
- **App Setup:** `src/app.js` configures middleware, routes, and error handling.
- **Routing:**
  - All routes are defined in `src/routes/`.
  - Each resource (e.g., product, user) has its own route file and controller.
  - The main router is `src/routes/index.js`.
- **Controllers:** Business logic is in `src/controllers/`.
- **Models:** Data models (likely for a database) are in `src/models/`.
- **Middleware:** Error handling and other middleware are in `src/middleware/`.
- **Config:** Environment and database configuration are in `src/config/`.
- **Utils:** JWT and token utilities are in `src/utils/`.

## Developer Workflows
- **Start Server:**
  - Use `npm run start` (see `package.json` for scripts).
- **Debugging:**
  - Main debugging happens in `src/server.js` and `src/app.js`.
- **Environment Variables:**
  - Managed via `src/config/env.js`.
- **Database:**
  - Connection details in `src/config/database.js`.

## Project-Specific Patterns
- **CommonJS:** All modules use `require`/`module.exports`.
- **Error Handling:** Centralized in `src/middleware/error.middleware.js`.
- **JWT Auth:** Utilities in `src/utils/jwt.js` and `src/utils/token-generator.js`.
- **Route Registration:** All routes are registered in `src/routes/index.js`.

## Integration Points
- **External Dependencies:**
  - Check `package.json` for installed packages (e.g., Express, JWT, etc.).
- **Cross-Component Communication:**
  - Controllers are invoked by routes; models are used by controllers.

## Examples
- To add a new resource:
  1. Create a model in `src/models/`
  2. Create a controller in `src/controllers/`
  3. Create a route in `src/routes/`
  4. Register the route in `src/routes/index.js`

## Key Files & Directories
- `src/server.js`, `src/app.js`: Server and app setup
- `src/routes/`: Routing logic
- `src/controllers/`: Business logic
- `src/models/`: Data models
- `src/middleware/`: Middleware
- `src/config/`: Configuration
- `src/utils/`: Utility functions

---
_If any section is unclear or missing important details, please provide feedback to improve these instructions._
