const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    publicPath: "./",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },

          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
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

      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: "file-loader",
      options: {
        outputPath: 'images',
      }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Webpack Config",
      template: "./src/index.html",
    }),

    new HtmlWebpackPlugin({
      filename: "about.html",
      title: "Nosotros",
      template: "./src/about.html",
    }),

    new HtmlWebpackPlugin({
      filename: "contact.html",
      title: "Contacto",
      template: "./src/contact.html",
    }),

    new MiniCssExtractPlugin(
      {
        filename: './css/[name].css' 
      }
    ),
    new CleanWebpackPlugin(),
  ],
};
