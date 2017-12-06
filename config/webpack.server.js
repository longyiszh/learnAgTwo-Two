const path = require('path');
const fs = require('fs');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { root } = require('../lib/helpers');
const serverpath = root('src', 'server');
const outputRootPath = root('dist');
const outputPath = path.join(outputRootPath, "./server");

let nodeModules = {};
fs.readdirSync('node_modules')
.filter((x) => {
  return ['.bin'].indexOf(x) === -1;
})
.forEach((mod) => {
  nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {
  entry: {
    'learn-ag-two-two': root('src', 'server', 'learn-ag-two-two.ts'),
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  target: 'node',

  node: {
    __dirname: false,
    __filename: false
  },

  externals: nodeModules,

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [

          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: path.resolve(serverpath, './tsconfig.server.json')
            }
          }

        ],
        exclude:  /node_modules/
      }

    ]
  },

  plugins: [
    new CleanWebpackPlugin([outputPath], {root: outputRootPath, verbose: false}),
    new CopyWebpackPlugin([
      { 
        from: path.resolve(serverpath, "./config"),
        to: 'config' 
      },
      { 
        from: path.resolve(serverpath, "./static"),
        to: 'static',
        ignore: [
          ".gitkeep"
        ]
      }
    ])
  ],

  output: {
    path: outputPath,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].[hash].chunk.js'
  }


}
