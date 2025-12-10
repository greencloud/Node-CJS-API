/**
 * This controller handles default routes such as 404 Not Found.
 *
 * @param {*} req
 * @param {*} res
 */

exports.notFound = (req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
}

