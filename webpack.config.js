module.exports = {
    entry: "./assets/javascripts/soc-core.ts",
    output: {
        filename: "dist/soc-core.js",
        path: __dirname
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    watch: false
}