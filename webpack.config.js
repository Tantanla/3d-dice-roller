const path = require('path');
 
module.exports = {
  entry: './src/index.js', // 项目的入口文件
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist'), // 打包文件放置的目录
  },
};