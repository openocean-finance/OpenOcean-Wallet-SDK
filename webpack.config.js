const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.ts'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      // "assert": require.resolve("assert/"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "url": require.resolve("url/"),
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify"),
      "tty": require.resolve("tty-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "constants": require.resolve("constants-browserify"),
      "dns": require.resolve("dns"),
      "fs": false,
      "dgram": false,
      "process": false,
    }
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: "index.js",
    library: 'OpenOceanWallet',
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: 'url-loader'
      },
      {
        test: /\.ts/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.binding':()=>{},
      'process.nextTick':()=>false,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.throwDeprecation': JSON.stringify(process.throwDeprecation),
      'process.platform': JSON.stringify(process.platform),
      'process.version': JSON.stringify(process.version),
      'process.noDeprecation': JSON.stringify(process.noDeprecation),
      'process.versions': JSON.stringify(process.versions),
      'process': {
        k:'process',
      },
    })
  ]
}
