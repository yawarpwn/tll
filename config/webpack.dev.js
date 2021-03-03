const { merge } = require('webpack-merge')
const common = require('./webpack.common')

/** @type {import('webpack').Configuration}*/
const devConfig = {
	mode: 'development',
	devServer: {
		port: 8080,
		contentBase: '../dist',
	},
	target: 'web',
	devtool: 'eval-source-map',	

	module: {
		rules: [
      {
        test: /\.(css|scss)$/,
        use: [
					{
						loader: 'style-loader',
					},
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: true,
            }
          },
          {
            loader: 'resolve-url-loader', options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss')('./tailwind.config.js'),
                  require('autoprefixer'),
                ]
              }
            }
          },


          {
            loader: 'sass-loader',
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
                includePaths: ["./node_modules"],
              },
              sourceMap: true,
            },
          },
        ],
      },
		]
	},

}

module.exports = merge(common, devConfig) 

