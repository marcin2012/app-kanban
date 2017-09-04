var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require("webpack");
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    app: './src/app/app.module.js',
    vendor: ['angular', 'angular-animate', 'angular-aria', 'angular-material', 'angular-ui-router']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ManifestPlugin({
      fileName: 'my-manifest.json',
      basePath: './src',
      seed: {
        name: 'manifest'
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/, exclude: /node_modules/,
        use: ['html-loader']
      }
    ]
  },

  devServer: {
    port: 3000,
    contentBase: './src',
    inline: true,
    hot: true
  }
};