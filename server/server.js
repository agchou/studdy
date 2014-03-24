/* global require */

//== Dependencies =========================================
var http = require('http');
var url = require('url');
var httpHelper = require('./helpers/HttpHelpers');

//== Controllers ==========================================
var Groups = require('./controllers/GroupsController');

//== Server Configuration =================================
var ip = '127.0.0.1';
var port = 8000;

//== Router ===============================================
var routes = {
  '/groups': Groups.controller
};

var router = function (req, res) {
  var parsedUri = url.parse(req.url);

  var path = routes[parsedUri.pathname];
  if (path) {
    path(req, res);
  } else {
    httpHelper.sendResponse(res, null, 404);
  }
};

//== Initialize Server ====================================
var server = http.createServer(router);
console.log('Listening on http://' + ip + ':' + port);
server.listen(port, ip);
