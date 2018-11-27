const glob = require('glob');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const generateHTMLPlugins = () =>
	glob.sync('./src/**/*.html').map(
		(dir) =>
			new HTMLWebpackPlugin({
				filename: path.basename(dir), // Output
				template: dir, // Input
				inject: false
			})
	);

module.exports = {
	node: {
		fs: 'empty'
	},
	entry: {
		app: './src/js/app.js',
		preLoader: './src/js/preloader.js',
		main: './src/style/main.scss',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.html$/,
				loader: 'raw-loader'
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: './src/static/',
				to: './static/'
			}
		]),
		...generateHTMLPlugins()
	],
	stats: {
		colors: true
	},
	devtool: 'source-map'
};
