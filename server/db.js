/* global require, exports */

var Sequelize = require('sequelize');

//== Create Connection to MySQL ===========================
var db = new Sequelize('studdy', 'root', '');

//== Models ===============================================
var Group = exports.Group = db.define('Group', {
  name: Sequelize.STRING,
  description: Sequelize.STRING
});

var User = exports.User = db.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING
});

var Message = exports.Message = db.define('Message', {
  text: Sequelize.TEXT
});

//== Relationships ========================================
//== Group / User
Group.hasMany(User, { through: 'Participants' });
User.hasMany(Group, { through: 'Participants' });

//== Group / Message
Group.hasMany(Message);
Message.belongsTo(Group);

//== User / Message
User.hasMany(Message);
Message.belongsTo(User);

//== Sync Database ========================================
db.sync();
