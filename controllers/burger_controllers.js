var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var burgerObject = {burgers: data};
        res.render('index', burgerObject);
    });
})

router.post('/burger/create', function(req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect('/index');
    });
})

router.put('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect('/index');
    });
})

module.exports = router;