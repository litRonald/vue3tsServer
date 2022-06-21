# 运行项目
node ./bin/www

# 定义好商品路由,加上数据库并启动 即可访问到mysql的数据

# mongoose 暂时没写完，差不多效果

## pm2 运行
# 运行pm2 路径 ./bin/www
pm2 start ./bin/www

# 删除并停止所有服务 /也可以单独关闭某一个
pm2 delete all


## 谨慎使用es6 ts语法

