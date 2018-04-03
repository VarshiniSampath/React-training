module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
          test:/\.css$/,
          loader:'css-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
};
