require("dotenv").config();
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var objectData = {
            burgers: data
        };
        console.log("this is objdata",objectData);
        res.render("index", objectData);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log('reached here');
    burger.insertOne("burger_name", req.body.burger_name, function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    
    var condition = "id = " + req.params.id;
    console.log(condition);
    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(res) {
            if (res.changedRows === 0) {
                // 404 Server Not Found ERROR
                return res.status(404).end();
            }
            // 200 OK ERROR
            res.status(200).end();
        }
    );
});

// router.delete("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
//     console.log(condition);
//     burger.deleteOne(condition, function(res)
//         {
//             if(res.affectedRows === 0) {
//                 return res.status(404).end();
//             } else {
//                 res.status(200).end();
//             }
//         }
//     )
// })

module.exports = router;

// var express = require("express");
// var router = express.Router();
// var burger = require('../models/burger.js');

// router.get('/', function(req, res) {
//     burger.selectAll(function(data) {
//         var burgerObject = {burgers: data};
//         res.render('index', burgerObject);
//     });
// })

// router.post('/burger/create', function(req, res) {
//     burger.insertOne(req.body.burger_name, function() {
//         res.redirect('/index');
//     });
// })

// router.put('/burger/eat/:id', function (req, res) {
//     burger.updateOne(req.params.id, function() {
//         res.redirect('/index');
//     });
// })

// module.exports = router;