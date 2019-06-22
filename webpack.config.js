const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules: [
      
      //babel
      { 
        //test: /\.js$/,
        test: /\.jsx?$/,  //react用にjsxも登録
        exclude: /node_modules/, 
        loader: "babel-loader"
      },
      
      //CSSに適用するloader
      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      //SCSSに適用するloader
      {
        test:/\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options:{
          limit: 2048,
          name: './images/[name].[ext]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}
