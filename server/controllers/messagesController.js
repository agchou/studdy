/*
 * Expose `Messages`.
 */

var Messages = module.exports = {};

Messages.get = function (req, res, next) {
  res.end('hi');
};

Messages.post = function (req, res, next) {
  res.end('hi');
};