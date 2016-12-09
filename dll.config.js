const webpack = require('webpack');

const vendors = [
	'react',
	'react-dom',
	'react-router',
	'jquery',
	'underscore',
	'redux',
	'redux-thunk',
	'react-redux',
	'antd',
];

module.exports = {
	output : {
		path    : './build/DLL',
		filename: '[name].js',
		library : '[name]',
	},
	entry  : {
		"lib": vendors,
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			},
		}),
		new webpack.DllPlugin({
			path   : './manifest.json',
			name   : '[name]',
			context: __dirname,
		}),
		new webpack.optimize.UglifyJsPlugin({
			output  : {
				comments: false  // remove all comments
			},
			compress: {
				//supresses warnings, usually from module minification
				warnings: false
			}
		}),
	],
};