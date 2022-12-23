const HTMLWebpackplugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new HTMLWebpackplugin({
      template: "./public/index.html",
    }),
  ],
};