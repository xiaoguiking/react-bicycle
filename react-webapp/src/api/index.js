/**
 * 请求模块
 * 
 *  post --------> data
 *  get ------------> params
 */
 import request from "../config/request";
 // 登录
 export const login = (params) => {
   // console.log(data, "data======>")
     return request({
       method: 'get',
       url: '/api/user/login',
       params
       // mock: true
     })
   }