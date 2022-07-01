// 读取数据库
let mysql = require('mysql')

// 数据库配置
let config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'goods'
}


// 声明 一个类
class Db {
    // 连接数据库
    constructor() {
        this.connect = mysql.createConnection(config);
        // 
        this.connect.connect((err) => {
            if (err) {
                console.log('数据库连接失败:', err)
            } else {
                console.log('成功')
            }
        })
    }

    //执行sql
    query(sql) {
        let p = new Promise((resolve, reject) => {
            this.connect.query(sql, (err, result) => {
                if (err) {
                    reject([, err, null])
                } else {
                    resolve([null, result])
                }
            })
        }).catch(err => {
            console.log(err)
        })
        return p
    }
}

// 暴露
const db = new Db();
// console.log(db)
module.exports = db