const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

if (!process.env.ENV || !process.env.ENV.length)
  throw new Error('ENV environment var not set');

const config = {
  entry: {
   app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ENV': JSON.stringify(process.env.ENV)
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  resolve: {
    extensions: [".js", ".json", ".es6.js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      // If we encounter a .es6.js file in node_modules, babel them.
      {
        test: /node_modules.*\.es6\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
};

if (process.env.ENV == 'prod') {
  console.log('Compiling in Production mode...\n')

  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  );

  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  );

} else {
  console.log('Compiling in Development mode...\n')
  config.devtool = 'inline-source-map';
  config.devServer = { contentBase: './dist' };
}

module.exports = config;
