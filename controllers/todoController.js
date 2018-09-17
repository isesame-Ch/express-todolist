var todoList = require('../model/todoList.js');
// var todoModel = require('../model/todoModel.js');

var todoCtl = {
	queryAll : function(cb) {
		todoList.queryAll(function(data) {
			cb(data);
		});
	},

	addItem : function(item, cb) {
		todoList.add(item, function(data) {
			cb(data);
		});
	},

	deleteItem : function(item, cb) {
		todoList.delete(item, function(data) {
			cb(data);
		});
	},
};


module.exports = todoCtl;