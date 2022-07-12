// pm2 配置入口 减少误操作 遗忘设置 
module.exports = {
    apps: [{
        name: "pm2", // 应用名称
        script: "./bin/www" // 入口文件
    }]
}