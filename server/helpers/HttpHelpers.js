/* global exports */

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

exports.sendResponse = function(res, obj, status){
  status = status || 200;
  res.writeHead(status, headers);
  res.end(JSON.stringify(obj));
};

exports.collectData = function(req, cb){
  var data = '';
  req.on('data', function(chunk){
    data += chunk;
  });
  req.on('end', function(){
    cb(data);
  });
};
