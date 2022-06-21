var express = require('express');
var router = express.Router();
console.log(`hello index`)
/* GET home page. */
router.get('/', function(req, res, next) {
  // render() 去此处查看 https://www.runoob.com/nodejs/nodejs-express-framework.html
  // res.render('index', { title: 'Express, Very Goood' }); // 渲染模板
  res.send('hello index')
});

module.exports = router;
