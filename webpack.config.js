const path = require('path')

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules: [
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
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  }
}
