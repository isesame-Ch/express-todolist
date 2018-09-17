var baseModel = {
	tableName : '',
	getTable : function(__table = '') {
		if (__table) {
			return __table;
		} else {
			__table = this.tableName;
			return __table;
		}
	},

	create : function(data) {
		if (!count(data)) {return null;}
		var sql = 'INSERT INTO ' + this.getTable() + '(';
		var sign = true;
		for(var key in data) {
			if (sign) {
				sql += key;
				sign = false;
			} else {
				sql = sql + ',' + key;
			}
		};

		sql += ') VALUES(';
		var sign = true;
		for (var i = 0;i<data.length;i++) {
			if(sign) {
				sql += '?';
			} else {
				sql = sql + ',?';
			}
		};

		sql += ')';
		return sql;
	},

	deleteById : function() {
		var sql = 'DELETE FROM ' + this.getTable() + ' WHERE id = ?';
		return sql;
	},

	updateById : function(data) {
		if(!count(data)){return null};
		var sql = 'UPDATE ' + getTable() + ' SET ';
		var num = true;
		for(var key in data) {
			if (num) {
				sql = sql + key + '= ?';
				num = false;
			} else {
				sql = sql + ',' + key + '= ?';
			}
		}

		return sql;
	},

	getAll : function() {
		var sql = 'SELECT * FROM ' + this.getTable() + 'WHERE 1=1';
		return sql;
	},

	getById : function() {
		var sql =  'SELECT * FROM ' + this.getTable() + 'WHERE id = ?'
		return sql;
	}

};
module.exports = baseModel;