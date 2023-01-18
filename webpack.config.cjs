const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PugPlugin = require('pug-plugin');
const fs = require('fs');
const webpack = require('webpack');
const path = require('path');

const srcPath = path.resolve(__dirname, './src');
const pagesPath = path.resolve(__dirname, './src/pages');
const pages = fs.readdirSync(pagesPath);

const multipleHtmlPlugins = pages.map((name) => (
  new HtmlWebpackPlugin({
    template: `./pages/${name}/${name}.pug`,
    filename: `./${name}.html`,
    chunks: [name],
  })
));

const entryPoints = pages.reduce((acc, name) => {
  acc[name] = `./pages/${name}/index.js`;
  return acc;
}, {});

const variablesPath = './src/main-styles/variables.scss';
const variablesScss = path.resolve(__dirname, variablesPath);

const mode = (process.env.NODE_ENV === 'production') ?
  'production' :
  'development';

const cssLoader = (mode === 'development') ?
  'style-loader' :
  MiniCssExtractPlugin.loader;

console.log(`${mode} mode`);

module.exports = {
  context: srcPath,
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: './[name].[contenthash].css',
      ignoreOrder: true,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    require('autoprefixer'),
  ].concat(multipleHtmlPlugins),
  entry: entryPoints,
  output: {
    filename: './[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][hash][ext][query]',
    clean: true,
  },
  devtool: (mode === 'development') ? 'eval-source-map' : false,
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, './src/assets/images/'),
      '@favicons': path.resolve(__dirname, './src/assets/favicons/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          cssLoader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                  'postcss-preset-env',
                ],
              },
            },
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: variablesScss,
            },
          },
        ],
      },
      {
        test: /\.(svg|png|ico|xml|json|webmanifest)$/i,
        include: /favicons/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/favicons/[name][hash][ext][query]',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /fonts|favicons/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][hash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        include: /fonts/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][hash][ext][query]',
        },
      },
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
        exclude: /(node_modules|bower_components)/,
        options: {
          basedir: path.resolve(__dirname, './src'),
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  },
};
