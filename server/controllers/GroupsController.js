/* global require, exports*/

//== Dependencies =========================================
var db = require('../db.js');
var httpHelpers = require('../helpers/HttpHelpers');

//== Get ==================================================
var getGroup = function (req, res) {
  db.Group.findAll()
    .success(function(groups) {
      httpHelpers.sendResponse(res, groups, 200);
    });
};

//== Post =================================================
var postGroup = function (req, res) {
  httpHelpers.collectData(req, function (group) {
    group = JSON.parse(group);

    db.Group.create(group)
      .success(function() {
        httpHelpers.sendResponse(res, null, 201);
      });
  });
};

//== Options ==============================================
var options = function (req, res) {
  httpHelpers.sendResponse(res, null, 200);
};

//== Actions ==============================================
var actions = {
  'GET': getGroup,
  'POST': postGroup,
  'OPTIONS': options
};

//== Controller ===========================================
exports.controller = function (req, res) {
  var action = actions[req.method]; // GET / POST / OPTIONS

  if (action) {
    action(req, res);
  } else {
    httpHelpers.sendResponse(res, null, 403);
  }
};
