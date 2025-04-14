const userServ = require('../services/userService');

exports.funcHello = async (req, res) => {
  res.send("Hello World!");
};

exports.funcGetUsers = userServ.getAllUsers;
exports.funcGetUsersById = userServ.getUserById;
exports.funcCreateUser = userServ.createUser; 

