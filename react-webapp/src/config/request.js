/**
 *  new 封装axios请求
 */
 import Axios from 'axios';
 // import {useHistory } from "react-router-dom";
 // import { message } from 'antd';
 
 
 const TOKEN_INVALID = 'Token认证失败，请重新登录'
 const NETWORK_ERROR = '网络请求异常，请稍后重试'
 
 
 
 const axios = Axios.create({
     // baseURL: config.mockApi,
     // baseURL: config.baseApi,
     baseURL: "http://localhost:3000",
     timeout: 20000 // 请求超时 20s
   })
   
 // 请求拦截器（发起请求之前的拦截）
 axios.interceptors.request.use(
     (config) => {
       console.log(config, "config")
       // console.log(req, 'req======>')
       /**
        * 根据你的项目实际情况来对 config 做处理
        * 这里对 config 不做任何处理，直接返回
        */
       // const { headers } = req
       // if (!headers.Authorization) headers.Authorization = `Bearer ${token}`
       // return response.data
     //   let isMock = req.mock
     //   if (typeof req.mock !== 'undefined') {
     //     isMock = req.mock
     //   }
       // 生产线上环境
     //   if (config.env === 'prod') {
     //     axios.defaults.baseURL = config.baseApi
     //   } else {
     //     axios.defaults.baseURL = isMock ? config.mockApi : config.baseApi
     //   }
       return config;
     },
     (error) => {
       return Promise.reject(error)
     }
   )
   
   // 响应拦截器（获取到响应时的拦截）
   axios.interceptors.response.use((res) => {
     const { data } = res;
     console.log(data, "data=======>")
     if (data.code === "0") {
       return data
     }
     if (data.code === 500001) {
         // message.error(TOKEN_INVALID)
       setTimeout(() => {
         // history.push('/')
         window.location.href = "http://localhost:3001/#/login"
       }, 1500)
       return Promise.reject(TOKEN_INVALID)
     }
     // message.error(data.msg || NETWORK_ERROR)
     return Promise.reject(data.msg || NETWORK_ERROR)
   })
   
   export default axios
   