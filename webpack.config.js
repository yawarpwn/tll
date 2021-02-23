const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
          "style-loader",
          "css-loader",
          //{ loader: "css-loader", options: { importLoaders: 1 } },
          "sass-loader",
        ],
      },
      //{
        //test: /\.(png|jpg|gif|png|svg)$/i,
        //use: [
          //{
            //loader: "url-loader",
            //options: {},
          //},
        //],
      //},
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
    new CleanWebpackPlugin(),
  ],
};
