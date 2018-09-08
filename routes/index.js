var express = require('express');
var bodyPaser = require('body-parser');

var todoController = require('../controllers/todoController.js');

var urlencodeParser = bodyPaser.urlencoded({ extended:false });
var jsonParser = bodyPaser.json();

var router = express.Router();

router.get('/todo', function(req,res,next) {
	todoController.queryAll(function(item) {
		res.render('todo', { todos:item });
	});
});

router.post('/todo', urlencodeParser, function(req, res, next){
	var item = req.body.item;
	todoController.addItem(item, function(item) {
		res.json({ data:item });
	});
});

router.delete('/todo/:item', urlencodeParser, function(req, res, next){
	var item = req.params.item;
	todoController.deleteItem(item, function(item) {
		res.json({ data:item });
	});
});
module.exports = router;