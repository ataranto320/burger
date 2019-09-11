var orm = require('../config/orm.js');

var burger = {
    selectAll: function(getback) {
        orm.selectAll(function(res) {
            getback(res);
        });
    },
    inserOne: function(burger_name, callback) {
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