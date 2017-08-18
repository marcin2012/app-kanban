var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app/app.js'
  },
  output: {
    path: '/build',
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body"
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
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
    contentBase: 'dist',
    inline: true
  }
};