var webpack           = require('webpack');
var path              = require('path');
var fs                = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HappyPack         = require('happypack');
var debug             = true;
var src               = 'build';
var publicPath        = '';
var serverDomain      = '';

module.exports = {
	devServer: {//webpack 服务器配置信息
		// historyApiFallback: true,//是否启动404页面跳转至index.html文件
		host       : '0.0.0.0',//服务器地址。0.0.0.0为所有ip地址都可以访问
		port       : '8010',//端口
		contentBase: __dirname,//服务器跟目录地址
	},
	entry    : {
		'mis/index': __dirname + "/src/mis/routers/mis.app.js",//入口
	},
	output   : {
		publicPath   : publicPath,//静态文件顶部相对位置
		path         : path.join(__dirname, src),//服务器目录相对路径
		filename     : "[name].js",//输出模块文件
		chunkFilename: 'app/chunk/[name].[chunkhash:8].chunk.js'//拆包配置
	},
	module   : {
		noParse: [/mis\/js/, /mis\/q/],//排除目录
		loaders: [{
			test   : /\.js$/,
			loader : 'babel-loader',
			exclude: /node_modules/,
			query  : {
				plugins: ["transform-decorators-legacy", ["import", {
					libraryName: "antd",
					style      : "css"
				}]],
				presets: ['react', 'es2015', 'stage-0']
			},
			happy  : { id: 'js1' },
		}, {
			test  : /\.css$/,
			loader: ExtractTextPlugin.extract("style", "css!autoprefixer"),
			// happy  : { id: 'css' },
		}, {
			test  : /\.scss$/,
			loader: ExtractTextPlugin.extract("style", "css!autoprefixer!sass"),
			// happy  : { id: 'css' },
		}, {
			test  : /\.less$/,
			loader: ExtractTextPlugin.extract("style", "css!autoprefixer!less")
		}, {
			test  : /.(png)|(jpg)|(jpeg)$/,
			loader: "url?limit=50000,name=img/[hash:8].[name].[ext]",
			// happy  : { id: 'img' },
		}]
	},
	resolve  : {
		extensions: ['', '.js', '.json']
	},
	externals: {},//设置全局变量
	plugins  : [
		new HappyPack({
			id     : 'js1',
			threads: 4,
		}),//多线程
		new ExtractTextPlugin("css/[name].css"),//抽出CSS
		new webpack.NoErrorsPlugin(),//不报错
		new HtmlWebpackPlugin({//输出HTML配置
			filename     : 'index.html',
			domain       : serverDomain,
			hash         : true,
			chunks       : ['mis/index'],
			excludeChunks: [],
			template     : __dirname + '/src/index.html',
			inject       : 'body' // Inject all scripts into the body (this is the default so you can skip it)
		}),
	].concat(!debug ? [
		new webpack.optimize.UglifyJsPlugin({//压缩
			compress: {
				warnings: false,
				drop_debugger: true,
				drop_console: true
			}
		}),

		function () {
			var deleteFolderRecursive = function (path) {//清空目录
				var files = [];
				if (fs.existsSync(path)) {
					files = fs.readdirSync(path);
					files.forEach(function (file, index) {
						var curPath = path + "/" + file;
						if (fs.statSync(curPath).isDirectory()) { // recurse
							deleteFolderRecursive(curPath);
						} else { // delete file
							fs.unlinkSync(curPath);
						}
					});
					fs.rmdirSync(path);
				}

			};
			deleteFolderRecursive(path.join(__dirname, "build/"));
		}
	] : [])
};
