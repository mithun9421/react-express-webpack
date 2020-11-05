var webpack = require("webpack");
var path = require("path");
const SRC_PATH = path.resolve(__dirname, "client");
var DIST_PATH = path.resolve(__dirname, "public");
var config = {
  devtool: "source-map",
  entry: [SRC_PATH + "/app.js"],
  output: {
    path: DIST_PATH,
    publicPath: "/",
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        include: /client/,
        loader: "babel-loader",
        options: {
          presets: ["es2015"],
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: /client/,
        loader: "babel-loader",
        options: {
          presets: ["es2015", "stage-2", "react"],
        },
      },
    ],
  },
  devServer: {
    hot: true,
    port: 4500,
    publicPath: "/",
  },
};

module.exports = config;
