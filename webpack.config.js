const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	devtool: "inline-source-map", // omit in production
	entry: {
		index: "./src/index.js",
		another: "./src/another-module.js",
	},
	devServer: {
		static: "./dist",
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: "Development",
		}),
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
};
