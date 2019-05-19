// webpack 必须采用commonjs写法
let path = require('path'); // 专门处理路径用的，以当前路径解析出一个相对路径
console.log(path.resolve('./dist'));
module.exports = {
    entry:{
        main:'./src/main.js',
        main1:'./src/main1.js',
    },
    // 打包的入口文件，webpack会自动查找相关的依赖进行打包
    output:{
        // filename:'bundle.js', // 打包后的名字
        filename:'[name].js',
        path: path.resolve('./dist') // 必须是一个绝对路径
    }
}