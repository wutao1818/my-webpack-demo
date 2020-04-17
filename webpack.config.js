const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 打包入口文件
  entry: {
    index: './src/index.js',
    vendor: ['lodash']
  },
  // 打包生成路径
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  // 优化第三方包作为缓存策略
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  // 引入的插件
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    }),
    new CleanWebpackPlugin(),
  ],
  
};