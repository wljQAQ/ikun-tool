const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const IkunPlugun = require("./plugins/index.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  stats: 'errors-warnings',
  plugins: [
    // new IkunPlugun(),
  ],
});
