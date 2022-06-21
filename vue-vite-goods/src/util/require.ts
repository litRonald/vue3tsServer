import axios from 'axios';


let getStore = (string:string) => {
    return sessionStorage.getItem(string)
}

// 统一请求路径前缀
let base = '/api';

// 接口环境地址
let API_ROOT = "http://127.0.0.1:3000" // 可以通过.env文件导入 看需求


// 超时设定
axios.defaults.timeout = 50000;
// 跨域访问携带cookie 没设置会跨域
// axios.defaults.withCredentials = true

axios.interceptors.request.use(config => {
    return config;
}, err => {
    // 最好替换成当前组件的 ui弹框
    alert('请求超时');    
    return Promise.resolve(err);
});


// http response 拦截器 会把所有下面的接口都给拦截了 注意状态控制
axios.interceptors.response.use(res => {
    const data = res.data;
    // 根据返回的code值来做不同的处理(和后端约定)
    switch (data.code) {
        // 请求失败
        case 400:
            alert(data.message);
            break;
        // 错误
        case 500:            
            alert("联系管理员");
            break;
        default:
            return data;
    }
    return data;
}, (err) => {
    // 返回状态码不为200时候的错误处理
    alert('连接错误，请重试');
    return Promise.resolve(err);
});

// get 请求
export const getRequest = (url:string, params: any) => {
    let accessToken = getStore('accessToken');
    return axios({
        method: 'get',
        url: `${API_ROOT}${url}`,
        params: params,
        headers: {
            // 'accessToken': accessToken
        }
    });
};


// POST请求
export const postRequest = (url:string, params: any, sign: string) => {
    let accessToken = getStore("accessToken");
    return axios({
        method: 'post',
        url: `${API_ROOT}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            ret = ret.substring(0, ret.length - 1);
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'accessToken': accessToken
        }
    });
};

// put
export const putRequest = (url: string, params: any) => {
    // let accessToken = getStore("accessToken");
    return axios({
        method: 'put',
        url: `${API_ROOT}${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            ret = ret.substring(0, ret.length - 1);
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'accessToken': accessToken
        }
    });
};



// export const deleteRequest = (url: string, params: any) => {
//     let accessToken = getStore('accessToken');
//     return axios({
//         method: 'delete',
//         url: `${API_ROOT}${base}${url}`,
//         params: params,
//         headers: {
//            'accessToken': accessToken
//         }
//     });
// };


/**
 * 无需token验证的请求 避免旧token过期导致请求失败
 * @param {*} url 
 * @param {*} params 
 */
 export const getRequestWithNoToken = (url: string, params: any) => {
    return axios({
        method: 'get',
        url: `${API_ROOT}${base}${url}`,
        params: params
    });
};

