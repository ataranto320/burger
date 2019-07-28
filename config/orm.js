// Requiring our burgers model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for selecting all of the burgers
  app.get("/api/burgers", function(req, res) {
    // selectAll returns all entries for a table when used with no options
    db.burgers.selectAll({}).then(function(dbburgers) {
      // We have access to the burgers as an argument inside of the callback function
      res.json(dbburgers);
    });
  });

  // POST route for saving a new burger
  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    // ** believe i need to connect to text and complete within a different file
    db.burgers.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbburgers) {
      // We have access to the new burger as an argument inside of the callback function
      res.json(dbburgers);
    });
  });

  // PUT route for updating burgers. We can get the updated burgers from req.body
  app.put("/api/burgers", function(req, res) {
    db.Todo.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbburgers){
      res.json(dbburgers);
    });
  });
  
};
