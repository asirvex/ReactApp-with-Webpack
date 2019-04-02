var path = require("path");
var HTMlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {test: /\.css$/, use: ['style-loader','css-loader']}
        ]
      },
    mode: 'development',
    plugins: [
        new HTMlWebpackPlugin({
            template: "app/index.html"
        })
    ]
};