var express = require('express');
var router = express.Router();

// 加载数据库配置
let model = require('../model/da')
// console.log(model, '--------------------------========')
console.log(`hello index`)
/* GET home page. */
router.get('/', function(req, res, next) {
  // render() 去此处查看 https://www.runoob.com/nodejs/nodejs-express-framework.html
  // res.render('index', { title: 'Express, Very Goood' }); // 渲染模板
  res.send('hello index')
});

router.get("/banner", async (req, res)=>{
  let sql = `SELECT id,CONCAT("http://127.0.0.1:3000","uploads/",image_src) as image_src,title,isshow from e_banners WHERE isshow=1`
  let [err, data] = await model.query(sql);
  if (err) {
    res.send({
      code: '500', msg: '查询失败'
    })
  } else {
    res.send({
      code: '200', msg: '查询成功', data: data
    })
  }

})


module.exports = router;
