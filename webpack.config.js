
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //default 
    mode: "development",
    //start of dependency chain which is automatically done in the depndency graph, with tree shaking (no unused files)
    entry: "./src/index.js",
    output: {
        //dist is a convention
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        //Required for HTML files
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            //For CSS Files and Images, requires installation of style loader and css loader, order matters (reverse)
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            //For HTML images, requires HTML loader installation
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            //For JS images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};
