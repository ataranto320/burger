// var orm = require("../config/orm.js");

// var burger = {
//     selectAll: function(callback) {
//         orm.selectAll("burgers", function(res) {
//             callback(res);
//         });
//     },
//     insertOne: function(column, value, callback) {
//         orm.insertOne("burgers", column, value, function(res) {
//             callback(res);
//         });
//     },
//     updateOne: function(burgerValues, condition, callback) {
//         orm.updateOne("burgers", burgerValues, condition, function(res) {
//             callback(res);
//         });
//     }
// };

// module.exports = burger;

var orm = require('../config/orm.js');

var burger = {
    selectAll: function(getback) {
        orm.selectAll(function(res) {
            getback(res);
        });
    },
    insertOne: function(burger_name, getback) {
        orm.insertOne(burger_name, function(res) {
            getback(res);
        });
    },
    updateOne: function(burger_id, getback) {
        orm.updateOne(burger_id, function(res) {
            getback(res);
        });
    }
};

module.exports = burger;