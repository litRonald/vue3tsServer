import { postRequest, getRequest } from "../util/require.js";
// ------------------登录------------
import { LoginReg, LoginReq } from "./interface/login.js";

// 注册  POST
export const memberReg = (param: LoginReg) => {
    return postRequest('/member/reg', param, '')
 }
 
 // 验证码
 export const getLoginCode = () => {
    return getRequest('/member/logincode', null)
 }
 
 // 登录 POST Content-Type: application/x-www-form-urlencoded
 export const login = (param: LoginReq, sign:string = '') => {
    return postRequest('/member/login', param, sign)
 }
 