import { postRequest } from "../util/require.js";
import {GoodsListResp, GoodsListParam} from './interface/good'

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

// 1. 看起来只是ts 不认识
// export const handleGoodsList: <GoodsListResp>(prarm:GoodsListParam) => GoodsListResp = (prarm:GoodsListParam, sign: string = '') => {
//    return postRequest('/goodssql', prarm, sign)
// }
// 2. 
export const handleGoodsList: GoodsListResp = (prarm:GoodsListParam, sign: string = '') => {
   return postRequest('/goodssql', prarm, sign)
}

