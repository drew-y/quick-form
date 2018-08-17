const path = require("path");
const CircularDependencyPlugin = require("circular-dependency-plugin");

const resolve = (...paths) => path.resolve(__dirname, ...paths);

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: resolve("src", "index.ts"),
    output: {
      path: resolve("dist"),
      filename: "bundle.js",
      library: "",
      libraryTarget: "umd"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        "vue$": "vue/dist/vue.esm.js",
        "views": resolve("src", "views")
      }
    },
    externals: ["vue"],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
            appendTsSuffixTo: [/\.vue$/]
          },
        },
        { test: /\.(html)$/, loader: "html-loader" }
      ]
    },
    plugins: [
      new CircularDependencyPlugin({
        // exclude detection of files based on a RegExp
        exclude: /a\.js|node_modules/,
        // add errors to webpack instead of warnings
        failOnError: true,
        // set the current working directory for displaying module paths
        cwd: process.cwd()
      })
    ]
  }
