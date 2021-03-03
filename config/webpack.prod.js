const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require ('mini-css-extract-plugin')

/** @type {import('webpack').Configuration}*/
const prodConfig = {
	mode: 'production',
	devtool: 'source-map',
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},

	module: {
		rules: [
      {
        test: /\.(css|scss)$/,
        use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '',
						}
					},
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: true,
            }
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

	plugins: [
		new MiniCssExtractPlugin()
	]
}

module.exports = merge(common, prodConfig) 

