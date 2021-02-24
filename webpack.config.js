const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require("webpack");
const path = require("path");

module.exports = {
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
            loader: 'postcss-loader'
          },

          {
            loader: 'sass-loader'
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
      title: "Webpack Config",
      template: "./src/about.html",
    }),

    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
};
