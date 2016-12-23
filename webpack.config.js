// // 先清空 build 文件夹下的文件
var buildFolder = 'dist'
var fs = require('fs'),
    buildPath = './' + buildFolder + '/',
    folder_exists = fs.existsSync(buildPath)

if (folder_exists) {
    var dirList = fs.readdirSync(buildPath)
    dirList.forEach(function (fileName) {
        fs.unlinkSync(buildPath + fileName)
    })
    console.log("clearing " + buildPath)
}

// 在命令行 输入  “PRODUCTION=1 webpack --progress” 就会打包压缩，并且注入md5戳 到 d.html里面

module.exports = {
    entry: {
        build: './main.js'
    },
    output: {
        path: './' + buildFolder,
        publicPath: buildFolder + '/',
        filename: '[name].js',
        libraryTarget: "commonjs2",
    },
    module: {
        loaders: [
            // 加载vue组件，并将css全部整合到一个style.css里面
            // 但是使用这种方式后 原先可以在vue组件中 在style里面加入 scoped 就不能用了,
            // 好处是使用了cssnext，那么样式按照标准的来写就行了，会自动生成兼容代码 http://cssnext.io/playground/
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                exclude: /node_modules$/,
                loader: "style-loader!css-loader!autoprefixer-loader?{ browsers: ['last 100 versions'] }!"
            },
            {
                test: /\.less/,
                exclude: /^node_modules$/,
                loader: "style-loader!css-loader!autoprefixer-loader?{ browsers: ['last 100 versions'] }!less-loader"
            },
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    vue: {
        postcss: [
            require('autoprefixer')({
                browsers: ['last 100 versions']
            })
        ]
    },
}