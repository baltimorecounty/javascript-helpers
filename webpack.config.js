const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		ApiHelpers: './src/ApiHelpers.js'
	},
	output: {
		path: path.join(__dirname, 'lib'),
		filename: '[name].min.js',
		library: 'Bc[name]'
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env', 'minify' ]
					}
				}
			}
		]
	},
	resolve: {
		alias: {
			handlebars: 'handlebars/dist/handlebars.js'
		}
	}
};
