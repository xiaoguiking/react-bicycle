/*
 * @Author: your name
 * @Date: 2020-06-06 17:12:15
 * @LastEditTime: 2020-06-06 17:53:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /antdBicycle/react-bicycle/react-bicycle/src/config/index.js
 */

/**
 * 包含应用中所有请求接口的函数 接口请求函数
 *
 */

import jsonp from 'jsonp'; // 发送jsonp请求
import { message } from 'antd';

// 发送jsonp请求得到天气信息
export const reqWeather = (city) => {
  // 执行器函数： 内部去执行异步任务
  // 成功调用resolve(), 失败了不调用reject，直接提示错误
  return new Promise((resolve, reject) => {
    // const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`;
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`;

    jsonp(url, {}, (error, data) => {
      if (!error && data.error === 0) {
        const { weather, dayPictureUrl } = data.results[0].weather_data[0];
        resolve({ weather, dayPictureUrl }); // 成功的
      } else {
        // 失败的
        message.error('调用天气信息失败');
      }
    });
  });
};
