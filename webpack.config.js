const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './app/app.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['@babel/preset-env'],
          babelrc: true,
        },
      },
      {
        test: /\.(graphql|gql)$/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './images',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['*', '.js', '.jsx'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    symlinks: false,
  },
  plugins: [
    // OccurrenceOrderPlugin is needed for webpack 1.x only
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin(),
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: true,
    }),
    new webpack.EnvironmentPlugin({
      URL_BACKEND_SERVER: process.env.URL_BACKEND_SERVER,
      URL_BACKEND_SERVER_2: process.env.URL_BACKEND_SERVER_2,
    }),
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',
      appShell: '/',
      responseStrategy: 'cache-first',
      autoUpdate: 1000 * 60 * 5,
      excludes: ['**/*.js', '**/*.css', '**/*.ico', '**/*.jpg'],
      cacheMaps: [
        {
          match: url => {
            const $array = ['/checkout/', '/checkout1/'];
            // eslint-disable-next-line consistent-return
            $array.forEach($item => {
              if (url.pathname.indexOf($item) !== 0) {
                return false;
              }
            });
            return new URL('/', url.pathname);
          },
          requestTypes: ['navigate'],
        },
      ],
      ServiceWorker: {
        events: true,
      },
      // AppCache: false,
      safeToUseOptionalCaches: true,
    }),
    new CopyWebpackPlugin([{ from: 'static/checkout', to: 'dist' }]),
    new CopyWebpackPlugin([{ from: 'static/checkout1', to: 'dist' }]),
  ],
  devtool: 'eval-source-map',
  // dev server
  devServer: {
    port: 3002,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
};
