const path      = require('path');
const webpack   = require('webpack');
const helpers   = require('./helpers/helpers');
const AotPlugin = require('@ngtools/webpack');
const ContextReplacementPlugin  = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

/*--

 Webpack Production build configuration

 - entry: Define the entry files
 - output: Define the output of the files
 - devtool: Developer tool to enhance debugging with sourcemaps
 - module: Define the module extensions and loaders
 - plugins: Define the webpack plugins
 - resolve: Webpack will search the modules in this directory

--*/

const config = {

  entry: {
    'polyfills': './app/polyfills.ts',
    'vendor': './app/vendor.ts',
    'app': './app/main.ts'
  },

  output: {
    path: 'dist',
    filename: '[name].js',
  },

  module: {

    rules: [
      {
        test: /\.ts$/,
        use: ['@ngtools/webpack']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: 'file-loader?name=assets/imgs/[name].[hash].[ext]'
      },
      {
        test: /\.(woff|woff2|ttf|eot|ico)$/,
        use: 'file-loader?name=assets/fonts/[name].[hash].[ext]'
      },
    ],
    exprContextCritical: false
  },

  plugins: [
    new CommonsChunkPlugin({
      name: [ 'app', 'vendor', 'polyfills' ]
    }),
    new AotPlugin.AotPlugin({
      tsConfigPath: helpers.root('../', 'tsconfig.json'),
      entryModule: helpers.root('../', 'app/app.module#AppModule')
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      output: {
        comments: false
      },
      mangle: {
        screw_ie8: true
      },
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false
      }
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [ 'node_modules' ]
  }

}

//Export config
module.exports = config;

