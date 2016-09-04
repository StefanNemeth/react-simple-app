var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/dev-server",

    path.resolve(__dirname, "src/index.jsx")
  ],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/dist"),
    publicPath: "/dist/"
  },

  resolve: {
    extensions: ["", ".js", ".jsx", ".json"]
  },

  module: {
    loaders: [
      {
        loaders: ["react-hot", "babel-loader", "eslint-loader"],
        include: [
          path.resolve(__dirname, "src")
        ],
        test: /\.jsx?$/
      }
    ]
  },

  eslint: {
    configFile: './.eslintrc'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
