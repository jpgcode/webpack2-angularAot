const path     = require('path');
const webpack  = require('webpack');

const config = {

  entry: {
    main: './app/vendor.ts'
  },

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: 'null'
      }
    ],
    exprContextCritical: false
  },
  performance: { hints: false }
}

//Validate config and export
module.exports = config;

