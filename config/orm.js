var connection = require("../config/connection.js");

function objToSql(ob){
	var arr = [];

	for(var key in ob){
		if(Object.hasOwnProperty.call(ob,key)){
			arr.push(key + "=" + ob[key]);
		}
	}
	return arr.toString();
}


var orm = {
	selectAll: function(tableInput,cb){
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString,function(err,res){
			if(err){
				throw err;
			}
			cb(res);
		})
	},
	insertOne: function(table,cols,vals,cb){
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (?,?";
		queryString += ") ";

		console.log(queryString);
		connection.query(queryString, vals,function(err,res){
			if(err){
				throw err;
			}

			cb(res);
		})
	},
	updateOne: function(table,objColVals,burgerId,cb){
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE id = ";
		queryString += burgerId;

		console.log(queryString);
		connection.query(queryString,function(err,res){
			if(err){
				throw err;
			}

			cb(res);
		})
	}
}

module.exports = orm;