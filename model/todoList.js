// var express = require('express');
// var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var itemSQL = require('../db/itemsql');
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

var itemModel = {
  add : function (data,cb) {
    pool.getConnection(function(err, connection) {
        connection.query(itemSQL.insert, [data], function(err, result) {
            if(result) {
                result = {
                  code:200,
                  msg:'增加成功'
                };
            }
            responseJSON(result);
            connection.release();
            cb(result);
        })
    })
  },

  delete : function (data,cb) {
    pool.getConnection(function(err, connection) {
        connection.query(itemSQL.delete, [data], function(err, result) {
            if(result) {
                result = {
                  code:200,
                  msg:'删除成功'
                };
            }
            responseJSON(result);
            connection.release();
            cb(result);
        })
    })
  },

  queryAll : function (cb) {
    pool.getConnection(function(err, connection) {
        connection.query(itemSQL.queryAll, function(err, result) {
            if(result) {
                responseJSON(result);
            }
            connection.release();
            cb(result);
        })
    })
  },

  getById : function (data,cb) {
    pool.getConnection(function(err, connection) {
        connection.query(itemSQL.getById, [item], function(err, result) {
            if(result) {
                responseJSON(result);
            }
            connection.release();
            cb(result);
        })
    })
  }

};

module.exports = itemModel;