//const proxy = require('http-proxy-middleware');
module.exports = {
	devServer: {
		host: 'localhost',
		port: 8080,
		proxy: {
			'/users': {
				target: 'http://localhost:8000', // 要跨域的域名
				changeOrigin: true, // 是否开启跨域
			},
			// '/get': {
			// 	target: 'http://localhost:8000', // 要跨域的域名
			// 	changeOrigin: true, // 是否开启跨域
			// }
		}
	}
}
