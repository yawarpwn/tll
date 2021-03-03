const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    publicPath: "./",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],

    alias: {
      "img": path.resolve(__dirname, 'src/assets/img')
    }
  },
  module: {
    rules: [

      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      //{
        //type: 'asset',
        //test: /\.(jpg|jpeg|png|gif|svg)$/,
      //},
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]', 
              useRelativePaths: true, 
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
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
      favicon: './src/assets/favicons/logo.png',
    }),

    new HtmlWebpackPlugin({
      filename: "contact.html",
      title: "Contacto",
      template: "./src/contact.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
