var mysql  = require('mysql');  
 
var express = require('express')

// var result = require('./util/result.ts');

var router = express.Router();

var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : 'root',       
  port: '3306',                   
  database: 'goods' // test 下面的 goods数据库
}); 
 
connection.connect();
// console.log(connection, 'connection============')
var sql = 'SELECT * FROM goods'; // 数据库中的表

// 分页
// select NAME, AGE, SEX from
// (select row_number() over() as NUM, * from USER where age>20) 
// where  end > NUM >= begin


var goodsResult = {}
function getGoodsSQL () {
  //查找数据库
  
  connection.query(sql,function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
    // console.log('--------------------------SELECT----------------------------');
    // console.log(result);
    // console.log('------------------------------------------------------------\n\n'); 
    goodsResult = {
      message: 'success',
      status: result.status,
      data: result,
      pageSize: 10,
      page: 1,
      code: 200
    }

  });
  // connection.end(); // 不需要断开 否则服务器需要重启
  return goodsResult
}

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(getGoodsSQL());
});
// post 对应post get对应get
router.post('/', function(req, res, next) {
  res.send(getGoodsSQL());
});

module.exports = router;