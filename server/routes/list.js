const express = require('express')
const router = express.Router();


// 分页
router.get('/course', async (req, res) => {
    //分页数据
    /*
    limit 0, 6
    0代表起始值 从第一条数据开始
    6： 规定显示的条数
    let pageSize = 3 page = 1
    第一页： limit 0,pageSize (page - 1) *pageSize
    第二页： limit 3,pageSize (page - 1) *pageSize

    */ 
    let {pageSize =5, page=1,area ='', grade="", subjec="", category=""} = req.query
    pageSize = Number(pageSize);
    page = Number(page);
    let startIndex = (page - 1);

    let wherestr = '';
    // 城市
    if(area !='') {
        wherestr = selectPageSQLStr(area, 'area_name', wherestr != '')
    }
    // 年级
    if(grade !='') {
        wherestr = selectPageSQLStr(grade, 'grade_name', wherestr != '')
    }
    // 学科
    if(subject !='') {
        wherestr = selectPageSQLStr(subject, 'subject_name', wherestr != '')
    }

    if (wherestr != '') {
        wherestr = `where ${wherestr}`
    } else {
        wherestr = `where 1`
    }

    let sql1 = `selectr * from e_course ${wherestr}` // 学科条数
    // `select id,cid,title,price,CONCAT("${api_url}", "uploads/", image_src) as image_src,intro,type,type_name,tid,status from e_course where  type=${type} LIMIT 0, 2`
    const sql2 = `select id,cid,title,price,CONCAT("${api_url}", "uploads/", image_src) as image_src,intro,type,type_name,tid,status from e_course where ${wherestr} order by id desc LIMIT ${startIndex, pageSize}`
    // LIMIT 0, 2代表只查询两条数据
    
})

function selectPageSQLStr (param, paramStr, neesAnd=false) {
    return `${neesAnd? ` AND ${paramStr}`: `${paramStr}`}=${param}`
}

module.exports = router;