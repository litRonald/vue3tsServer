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

// 1. 
// export const handleGoodsList: <GoodsListResp>(param:GoodsListParam) => GoodsListResp = (prarm:GoodsListParam, sign: string = '') => {
//    return postRequest('/goodssql', param, sign)
// }
// 2. 
export const handleGoodsList = (param:GoodsListParam, sign: string = '') => {
   return postRequest('/goodssql', param, sign)
}

