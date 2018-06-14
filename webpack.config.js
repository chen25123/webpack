/* eslint-disable no-undef,import/first */
const path = require('path'); // webpack 内置文件路径处理

module.exports = {
  entry: './src/main.js', // 入口js
  output: {
     // 输出文件名 ，这里写死了， 推荐 [name].js 这种写法，后面再讲
    filename: 'bundle.js',
    // 输出路径，相对 本配置文件生成目录，最后的打包文件将会是  dist/bundle.js
    path: path.resolve(__dirname, 'dist')
  }
}
