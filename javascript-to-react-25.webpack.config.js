const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/build/"
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
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // tells webpack to ook for all files that end with .png, .svg, .jpg, .gif file extensions.
                use: {   // tells webpack to srve the matched image files to the file-loader.
                    loader: "file-loader"
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        port: 3000,
        publicPath: "/build/",
        open: true,
        overlay: true
    }
};