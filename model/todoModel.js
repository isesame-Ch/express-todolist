var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var itemSQL = require('../db/itemsql');
var baseModel = require('./BaseModel');
var util = require("util");
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool( dbConfig.test );
// 响应一个JSON数据
var responseJSON = function (ret) {
   if(typeof ret === 'undefined') { 
        return {     code:'-200',     msg: '操作失败'   }; 
  } else { 
    return ret;
  }
};

var todoModel = {
	baseModel.call(this);
};

util.inherits(todoModel, baseModel);

console.dir(todoModel);

module.exports = todoModel;