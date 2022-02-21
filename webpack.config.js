const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ShowAssetsTablePlugin = require("webpack-show-assets-table");

module.exports = {
	performance: { hints: false },
	mode: "development",
	devtool: "inline-source-map", // omit in production
	entry: {
		index: "./src/index.js",
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
			title: "Caching",
		}),
		new ShowAssetsTablePlugin(),
	],
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	optimization: {
		moduleIds: "deterministic",
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]nodemodules[\\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
	},
};
