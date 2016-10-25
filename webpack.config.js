module.exports = {
  entry: {
    demo: './test-build/entry.js'
  },
  output: {
    path: "./test",
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
        query: {
          babelrc: false,
          presets: ['react']
        }
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  }
};

