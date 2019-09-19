var express = require("express");
var dotenv = require("dotenv");
var orm = require("./config/orm.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("./public"));

// Routes
// =============================================================
// require("./config/orm.js")(app);
orm.selectAll("burger_name", "devoured");
orm.insertOne("Mexi", "0");
orm.updateOne("burger_name", "devoured");


var expresshb = require("express-handlebars");

app.engine("handlebars", expresshb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controllers.js");

app.use(routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
