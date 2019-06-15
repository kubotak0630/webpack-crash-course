const path = require('path');

// 絶対パスを取得
const outputPaht = path.resolve(__dirname, 'dist');
console.log({outputPaht});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPaht
  }

}