// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("burgers", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
});

// Exports the connection for other files to use
module.exports = sequelize;

// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "vodkamysql1",
//   database: "burgers_db"
// });

//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

//   module.exports = ;