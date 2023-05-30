const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    libraryTarget: 'umd', // make the bundle export
  },
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.ts', '.js', '...'],
    plugins: [],
  },
};
