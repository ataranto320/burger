require("dotenv").config();
var mysql = require("mysql");
var keys = require("../keys.js");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  
}else{
   connection = mysql.createConnection({
    host: "localhost",
    database: "burgers_db",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: process.env.password,
    database: process.env.database
  });
  
    
}

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as id " + connection.threadId);
});






  module.exports = connection;

  // require("dotenv").config();
// var mysql = require("mysql");
// var keys = require("../keys.js");

// var connection;

// if (process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection(keys.MySQL);
// }

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;