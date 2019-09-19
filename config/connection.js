var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  database: "burgers_db",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.password,
  // database: process.env.database
});

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
  });

  module.exports = connection;