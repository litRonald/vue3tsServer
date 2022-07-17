import { postRequest } from "../util/require.js";

import {GoodsListResp, GoodsListParam} from './interface/good'
import { LoginReg, LoginReq } from "./interface/login.js";


// 示范
// const foo = <T,>(x: T): T => x;

// const foo = <T extends {}>(x: T): T => x;

// const foo = <T extends Record<string, unknown>>(x: T): T => x;

// const foo: <T>(x: T) => T = x => x;

// const identity = <T,>(arg: T): T => {
//     console.log(arg);
//     return arg;
// };

// const renderAuthorize = <T>(Authorized: T): ((currentAuthority: CurrentAuthorityType) => T) => (
//     currentAuthority: CurrentAuthorityType,
//   ): T => {
//      return
//  };

// 1. 
// export const handleGoodsList: <GoodsListResp>(param:GoodsListParam) => GoodsListResp = (prarm:GoodsListParam, sign: string = '') => {
//    return postRequest('/goodssql', param, sign)
// }
// 2. 


// 商品列表
export const handleGoodsList = (param:GoodsListParam, sign: string = '') => {
   return postRequest('/goodssql', param, sign)
}


// ------------------登录------------
// 注册  POST
export const handleMemberReg = (param: LoginReg) => {
   return postRequest('/member/reg', param, '')
}

// 验证码
export const handleLoginCode = () => {
   return postRequest('/member/logincode', null, '')
}

// 登录 POST Content-Type: application/x-www-form-urlencoded
export const handleLogin = (param: LoginReq, sign:string = '') => {
   return postRequest('/member/login', param, sign)
}
