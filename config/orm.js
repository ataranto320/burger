require("dotenv").config();
var connection = require("./connection.js");

function pushBurger(num)
{
    var array = [];
    for (var i = 0; i < Number; i++) {
        array.push("?");
    }
    return array.toString();
}

function toSql(object) {
    var array = [];
  
    for (var key in object) {
      var value = object[key];
      if (Object.property.call(object, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        array.push(key + "=" + value);
      }
    }
    return array.toString();
}

var orm = {
    selectAll: function(tableInput, callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableInput], function(err, res) {
            if (err) throw err;
            console.log(res);
            callback(res);
        });
    },
    insertOne: function(table, column, value, callback) {
        var queryString = "INSERT INTO " + table + " (" + column.toString() + ") VALUES (?);";

        queryString += " (";
        queryString += column.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += pushBurger(value.length);
        queryString += ") ";
        console.log(queryString);

        connection.query(queryString, [value], function (err, res) {
            if (err) throw err;
            console.log(res);
            callback(res);
        });
    },
    updateOne: function(table, burgerValues, condition, callback) {
        var queryString = "UPDATE " + table + " SET " + toSql(burgerValues) + " WHERE " + condition;

        queryString += " SET ";
        queryString += toSql(burgerValues);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            console.log(res);
            callback(res);
        });
    }
    // deleteOne: function(table, condition, callback) {
    //     var queryString = "DELETE FROM " + table;

    //     queryString += " WHERE ";
    //     queryString += condition;

    //     connection.query(queryString, function(err, res) {
    //         if (err) throw err;
    //         console.log(res);
    //         callback(res);
    //     });
    // }
};

module.exports = orm;

// var orm = {
//   selectAll: function(burger_name, devoured) {
//     var queryString = "SELECT * FROM burgers";
//     connection.query(queryString), [burger_name], [devoured], function(err, res) {
//       if (err) throw err;
//       console.log(res);
//       burger_name(res);
//       devoured(res);
//     }
//   },

//   insertOne: function(burger_name, devoured) {
//     var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('Mexi', '1'), ('BBQ', '1'), ('Apple Bacon', '0'));";
//     console.log(queryString);
//     connection.query(queryString, [burger_name], [devoured], function(err, res) {
//       if (err) throw err;
//       console.log(res);
//       burger_name(res);
//       devoured(res);
//     })
//   },
    
//   updateOne: function(burger_name, devoured, condition) {
//     var queryString = "UPDATE " + burger_name + devoured + " SET " + (burger_name, devoured) + " WHERE " + condition;
//     connection.query(queryString), function(err, res) {
//       if (err) throw err;
//       console.log(res);
//       burger_name(res);
//       devoured(res);
//     }
//   }
// };

// module.exports = orm;

// Routes
// =============================================================
// module.exports = function(app) {

  // GET route for selecting all of the burgers
  // app.get("/api/burgers", function(req, res) {
  //   // selectAll returns all entries for a table when used with no options
  //   db.burgers.selectAll({}).then(function(dbburgers) {
  //     // We have access to the burgers as an argument inside of the callback function
  //     res.json(dbburgers);
  //   });
  // });

  // POST route for saving a new burger
  // app.post("/api/burgers", function(req, res) {
  //   console.log(req.body);
  //   // create takes an argument of an object describing the item we want to
  //   // insert into our table. In this case we just we pass in an object with a text
  //   // and complete property (req.body)
  //   // ** believe i need to connect to text and complete within a different file
  //   db.burgers.insertOne({
  //     text: req.body.text,
  //     complete: req.body.complete
  //   }).then(function(dbburgers) {
  //     // We have access to the new burger as an argument inside of the callback function
  //     res.json(dbburgers);
  //   });
  // });

  // PUT route for updating burgers. We can get the updated burgers from req.body
//   app.put("/api/burgers", function(req, res) {
//     db.Todo.updateOne({
//       text: req.body.text,
//       complete: req.body.complete
//     }, {
//       where: {
//         id: req.body.id
//       }
//     }).then(function(dbburgers){
//       res.json(dbburgers);
//     });
//   });
  
// };
