const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const port = 8000;

//设置允许跨域访问该服务.
app.all("", function(req, res, next) {
	res.header("Access - Control - Allow - Origin", "");
	res.header("Access - Control - Allow - Headers", "Content - Type");
	res.header("Access - Control - Allow - Methods", "*");
	res.header("Content - Type", "application / json; charset = utf - 8");
	next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
//使用express中间件
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
//使用bodyParser中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

//监听
app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
})

module.exports = app;
