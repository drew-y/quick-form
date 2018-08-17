const path = require("path");

const resolve = (...paths) => path.resolve(__dirname, ...paths);

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: resolve("test.ts"),
  output: {
    filename: "bundle.js",
    path: resolve("dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  }
}
