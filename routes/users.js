var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const app = express();

//开启数据库
const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'wangze',
	password: '45855283',
	database: 'school',
	multipleStatements: true, //  允许执行多条语句
});

//连接数据库
connection.connect(() => {
	console.log("连接成功！")
});

//设置跨域访问
app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

//新增接口
router.post("/addUser", (req, res, next) => {
	var addSql = 'INSERT INTO user(id,name,pass) VALUES(NULL,?,?)';
	var addSqlParams = [req.body.user, req.body.pass];
	//增
	connection.query(addSql, addSqlParams, function(err, result) {
		if (err) {
			console.log('[INSERT ERROR] - ', err.message);
			return;
		}
		res.json(result);
		console.log("result=", result);
	})
});
//查询接口
router.get("/searchUser", (req, res) => {
	let sql = 'SELECT * FROM user'; // WHERE name = ' + name + ' and pass = ' + pass
	//查
	connection.query(sql, function(err, result, fields) {
		if (err) {
			console.log('[SELECT ERROR] - ', err.message);
			return;
		}
		res.json(result);
		//console.log("result=", result);
	});
});

module.exports = router;
