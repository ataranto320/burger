var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "vodkamysql1",
  database: "burgers_db"
});

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });