
'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
process.on('unhandledRejection', err => {
    throw err;
});

const path = require('path');
const chalk = require('chalk');
const fs = require('fs');
const webpack = require('webpack');
const config = require('./webpack.config.js');

//解析需要遍历的文件夹，我这以E盘根目录为例  
var filePath = path.resolve('./src');

//调用文件遍历方法  
const cwd = process.cwd();

fs.readdirSync(filePath).forEach(function(item){
    var name = item.split('.')[0]
    config.entry[name] = path.resolve(filePath, item)
})

config.output.path = path.resolve(cwd, 'dist')

function build(previousFileSizes) {
    let compiler = webpack(config);
    compiler.run(function(){
        console.log('build success')
    })
}
 build()
console.log(config)