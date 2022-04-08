const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require('fs');

const path = require('path');
const srcPath = path.resolve(__dirname, "./src");

const pagesPath = path.resolve(__dirname, "./src/pages");
const pages = fs.readdirSync(pagesPath);

let multipleHtmlPlugins = pages.map(name => {
    return new HtmlWebpackPlugin({
      template: `./pages/${name}/${name}.pug`, // relative path to the HTML files
      filename: `${name}.html`, // output HTML files
    });
});

console.log(pages);

let mode = "development";
if (process.env.NODE_ENV === "production") {
    mode = "production";
}
console.log(mode + " mode");


module.exports = {
    context: srcPath,
    mode: mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        require('autoprefixer'),
        new HtmlWebpackPlugin({
            template: "./index.pug",
            filename: "./index.html"
          })
    ].concat(multipleHtmlPlugins),
    entry: {
        main: "./index.js"
    },
    output: {
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true
    },
    devtool: "source-map",
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === "development") ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                        "autoprefixer",
                                        "postcss-preset-env",
                                ]
                            }
                        }
                    },
                    "sass-loader",
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: path.resolve(__dirname, "./src/styles/variables.scss")
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource"
            },
            {
                test: /\.pug$/,
                loader: "pug-loader",
                exclude: /(node_modules|bower_components)/,
                options: {
                    basedir: path.resolve(__dirname, './src')
                }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
};