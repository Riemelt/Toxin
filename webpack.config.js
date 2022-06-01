const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const ESLintPlugin = require('eslint-webpack-plugin');
const fs = require('fs');
const webpack = require('webpack');
const ghpages = require('gh-pages');

const path = require('path');
const srcPath = path.resolve(__dirname, "./src");

const pagesPath = path.resolve(__dirname, "./src/pages");
const pages = fs.readdirSync(pagesPath);

const multipleHtmlPlugins = pages.map(name => {
  return new HtmlWebpackPlugin({
    template: `./pages/${name}/${name}.pug`, // relative path to the HTML files
    filename: `${name}/${name}.html`, // output HTML files
    chunks: [name],
  });
});

const entryPoints = pages.reduce((acc, name) => {
  acc[name] = `./pages/${name}/index.js`;
  return acc;
}, {});

console.log(pages);

ghpages.publish('dist', function() {});

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}
console.log(mode + " mode");


module.exports = {
  context: srcPath,
  mode,
  plugins: [
   // new ESLintPlugin({
   // }),
    new MiniCssExtractPlugin({
      filename: "[name]/[name].[contenthash].css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    require('autoprefixer'),
    new HtmlWebpackPlugin({
      template: "./index.pug",
      filename: "./index.html",
      chunks: ["index"],
    })
  ].concat(multipleHtmlPlugins),
  entry: entryPoints,
  output: {
    filename: "[name]/[name].[contenthash].js",
    assetModuleFilename: "assets/[name][hash][ext][query]",
    clean: true
  },
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    alias: {
      Images: path.resolve(__dirname, "./src/assets/images/"),
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
        type: "asset/resource",
        generator: {
          filename: 'assets/images/[name][hash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: 'assets/fonts/[name][hash][ext][query]',
        },
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
  },
  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
};