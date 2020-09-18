var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var port = 8000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
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

//在根路由（/）（应用程序的首页）上响应POST请求：
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
//响应对/user路由的PUT请求：
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

//响应对/user路由的DELETE请求：
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
//监听
app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
})

module.exports = app;
