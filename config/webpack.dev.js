const { merge } = require('webpack-merge')
const common = require('./webpack.common')

/** @type {import('webpack').Configuration}*/
const devConfig = {
	mode: 'development',
	devServer: {
		port: 8080,
		contentBase: '../dist',
	},
	target: 'web'
}

module.exports = merge(common, devConfig) 

