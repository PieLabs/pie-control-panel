const path = require('path');

module.exports = {
  entry: {
    demo: './entry.js'
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

