/***  
 * 登录接口
*/
const express = require('express')
const router = express.Router();

// uuid加密包 唯一用户
let uuid = require('uuid')
let md5 = require('md5')


// 加载数据库配置
let model = require('../model/da')
// 设置token
const jwt = require("jsonwebtoken")
//撒盐，加密时候混淆
const secret = '113Bmongojsdalkfnxcvmas'
//生成token
//info也就是payload是需要存入token的信息
function createToken(info) {
	let token = jwt.sign(info, secret, {
        //Token有效时间 单位s
		expiresIn:60 * 60 * 10
	})
	return token
}

// 注册用户
router.post('/reg', async (req, res) => {
    let { username, password, passwordAgain } = req.body
    console.log('-------------')
    console.log('password: ', password)
    console.log('passwordAgain:', passwordAgain)
    if (!username || !password) {
        res.send({
            code: '400', msg: '用户名或者密码没填'
        })
    } else if (password !== passwordAgain) {
        res.send({
            code: '400', msg: '两次密码不一样'
        })
    } else {
        // 判断用户名是否在数据库中存在
        // 在就登录 不在则注册
        let sql = `select * from e_member where username="${username}"`
        let [err, data] = await model.query(sql)
        if (err) {
            // console.log(err)
        } else if (data.length > 0) {
            res.send({
                code: '400', msg: '该用户已经注册,请登录'
            })
        } else {
            let mid = uuid.v4(); // 唯一性
            password = md5(password); //加密密码
            let createdate = Date.now(); // 获取当前日期
            let sql = `insert into e_member (mid, username, password, createdate) value ("${mid}", "${username}", "${password}", "${createdate}")`;
            let [err, data] = await model.query(sql)
            if (err) {
                res.send({
                    code: '400', msg: '注册失败'
                })
            } else {
                res.send({
                    code: '200', msg: '注册成功'
                })
            }
        }
    }
})


//生成验证码包
let svgCaptcha = require('svg-captcha');
console.log('svg-captcha')
// 统一验证码接口
router.get('/logincode', async (req, res) => {
    let Captcha = svgCaptcha.create()
    // console.log(Captcha)

    // 把验证码存到cookie
    res.cookie('code', Captcha.text)

    res.type('svg') // 使用svg图片 数据流
    res.send(Captcha.data) // 发送数据流
})

// 登录
router.post('/login', async (req, res) => {
    let { username, password, codes } = req.body
    // console.log(req.body)
    // console.log(`---------------`)
    password = md5(password)
    if (!username || !password || !codes) {
        res.send({ code: '400', msg: '用户密码验证码不能为空' })
    }
    // 用户是否存在
    let sql = `select * from e_member where username = "${username}" && password = "${password}"`;
    // console.log(sql)
    let [err, data] = await model.query(sql);
    // console.log(data) 
    if (data.length == 0) {
        // 未注册
        res.send({
            code: '400', msg: '请先注册'
        })
    } else {
        // 验证码
        console.log(req.cookies.code.toUpperCase())
        console.log(codes.toUpperCase())
        if (req.cookies.code.toUpperCase() == codes.toUpperCase()) {
            res.send({code: '200', msg: '登录成功'})

            let token = createToken(user)
	        res.json({token})
        } else {
            res.send({code: '400', msg: '验证码未验证通过'})
        }
    }

})

module.exports = router;