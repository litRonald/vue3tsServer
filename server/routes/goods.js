// 从 mongodb 获取

var express = require('express')

var router = express.Router();
var mongoose = require('mongoose');

var Goods = require('../module/goods')

// 链接数据库
mongoose.connect('mongodb://127.0.0.1:27017/dumall')

mongoose.connections.on('connected', () => {
    console.log('succes connect')
})
mongoose.connections.on('error', () => {
    console.log('error connect')
})
mongoose.connections.on('disconnected', () => {
    console.log('succes disconnected')
})

router.get('/', (request, responce, next)=>{
    responce.send('hello list')
    Goods.find({}, (err, doc)=> {
        if(err) {
            responce.json({
                status: '1',
                msg: err.message
            })
        } else {
            responce.json({
                status: '0',
                msg: '',
                result: {
                    count: doc.length,
                    list: doc
                }
            })
        }
    })
})

module.exports = router