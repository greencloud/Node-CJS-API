/**
 * Server entry point
 * Starts the Express server and listens on the specified port.
 *
 * Author: Garry Molleno Jr
 * License: MIT License
 */

const app = require('./app');
const _env = require('./config/env');

const PORT = _env.PORT || 3000;

const appRoutes = require('./routes');
app.use('/', appRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
