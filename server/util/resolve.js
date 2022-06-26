const fs = request('fs')
const path = require('path');

const regStyle = /<style><\/style>/
const regScript = /<script><\/script>/


// 需要自己找到html文件
fs.readFile(path.join(__dirname, '***/index.html'), 'utf8', (err,dataStr) => {
    if(err) return console.log('读取html文件失败', err.message)

    resolveCss(dataStr)
    resolveJs(dataStr)
    resolveHTML(dataStr)
})

const resolveCss = (htmlStr) => {
    // html 的style转化成为 css文件
    const r1 = regStyle.exec(htmlStr)
    // 提取出来的样式
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    // 写入到 指定目录中
    fs.writeFile(path.join(__dirname, '***/css/index.css'), newCSS, (err) => {
        if(err) return console.log('读取html文件失败', err.message)
    
        console.log('success')
    })
}

const resolveJs = (htmlStr) => {
    // html 的script转化成为 js文件
    const r1 = regScript.exec(htmlStr)
    // 提取出来的
    const newCSS = r1[0].replace('<script>', '').replace('</script>', '')
    // 写入到 指定目录中
    fs.writeFile(path.join(__dirname, '***/js/index.js'), newCSS, (err) => {
        if(err) return console.log('读取html文件失败', err.message)
        console.log('success')
    })

}

const resolveHTML = (htmlStr) => {
   // 替换掉 css js
    const newHtml = htmlStr.replace(regStyle, `<link rel="stylesheet" href="./css/index.css" />`).replace(regScript, `<script src="./js/index.js" ></script`)
    fs.writeFile(path.join(__dirname, './***/index.html'), newHtml, (err) => {
        if (err) return console.log(err)
        console.log('write success')
    })
}

