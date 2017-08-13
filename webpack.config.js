var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/app/app.js',
  output: {
    path: __dirname + "/dist", // output directory
    filename: "bundle.js" // name of the generated bundle
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
      }
    ]
  },

  devServer: {
    port: 3000,
    contentBase: 'dist',
    inline: true
  }
};