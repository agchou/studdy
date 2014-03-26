/*
 * Expose `Users`.
 */

var Users = module.exports = {};

Users.get = function (req, res, next) {
  console.log('eh?');
  res.end('something happened!');
};

Users.post = function (req, res, next) {
  res.end('hi');
};