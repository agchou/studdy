//== Module Dependencies ==================================
var express = require('express');
var Users = require('./controllers/usersController');
var Groups = require('./controllers/groupsController');
var Messages = require('./controllers/messagesController');

var app = module.exports = express();

app.get('/users', Users.get);
app.post('/users', Users.post);

app.get('/groups', Groups.get);
app.post('/groups', Groups.post);

app.get('/messages', Messages.get);
app.post('/messages', Messages.post);

app.all('/*', function (req, res, next) {
  res.writeHead(404);
  res.end('no route');
});

app.listen(3000);
console.log('Studdy listening on 3000');