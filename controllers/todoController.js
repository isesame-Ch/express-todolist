var todoList = require('../model/todoList.js');

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
	}
};

// var todo = function(cb) {
// 		User.queryAll(function(data) {
// 			cb(data);
// 		});
// 	}


module.exports = todoCtl;

// module.exports = function(app) {
// 	app.get('/todo', function(req, res) {
// 		res.render('todo',{ todos:data });
// 	});

// 	app.post('/todo', urlencodeParser, function(req, res) {
		// var item = req.body;
// 		data.push(item);
// 		res.json(data);
// 	});

// 	app.delete('/todo/:item', urlencodeParser, function(req, res) {
// 		data = data.filter(function(todo) {
// 			return todo.item.replace(/ /g, "-") !==req.params.item;
// 		});
// 		res.json(data);
// 	});
// }