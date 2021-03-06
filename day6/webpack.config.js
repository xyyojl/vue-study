// webpack 必须采用commonjs写法
let path = require('path'); // 专门处理路径用的，以当前路径解析出一个相对路径
console.log(path.resolve('./dist'));
module.exports = {
    entry:'./src/main.js',
    // 打包的入口文件，webpack会自动查找相关的依赖进行打包
    output:{
        filename:'bundle.js', // 打包后的名字
        path: path.resolve('./dist') // 必须是一个绝对路径
    },
    // 模块的解析规则
    // - js 匹配所有的js 用babel-loader 转译 排除掉 node_modules
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:'/node_modules/'}
        ]
    } 
}