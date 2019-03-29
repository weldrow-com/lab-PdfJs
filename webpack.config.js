const path = require('path');

module.exports = {
  entry: {
    'index': [
      path.resolve(__dirname, 'src/index.js')
    ]
  },
  devServer: {
    contentBase: './src',
    port: 8010,
    open: true
  }
};