const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app/app'),
  build: path.join(__dirname, 'build')
};

const ROOT_PATH = path.resolve(__dirname);

var config = {
  context: ROOT_PATH,
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Command Library"
    })
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'sass'],
        include: PATHS,
      }
    ]
  }
}

module.exports = config;
