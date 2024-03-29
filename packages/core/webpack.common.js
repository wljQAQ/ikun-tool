const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  target: "node14",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "index.js",
    globalObject: "this",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "ikunTool",
      type: "umd",
    },
  },
};
