const path = require('path')

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  devServer: {
    contentBase: outputPath
  }
}
