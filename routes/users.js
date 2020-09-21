var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const app = express();

//
const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'wangze',
	password: '45855283',
	database: 'school'
});

connection.connect();

connection.query('SELECT * FROM `user`', function(error, results, fields) {
	if (error) throw error;
	console.log('The solution is: ', results);
});

var addSql = 'INSERT INTO user(id,name,pass) VALUES(NULL,?,?)';
var addSqlParams = ['123', 'https://c.runoob.com'];
router.post("/addUser", (req, res, next) => {
	//增
	connection.query(addSql, addSqlParams, function(err, result) {
		if (err) {
			console.log('[INSERT ERROR] - ', err.message);
			return;
		}
	})
})
var sql = 'SELECT * FROM user';
router.get("/searchUser", (req, res) => {
	//查
	connection.query(sql, function(err, result) {
		if (err) {
			console.log('[SELECT ERROR] - ', err.message);
			return;
		}
		console.log("result=",result);
	});
});

module.exports = router;
