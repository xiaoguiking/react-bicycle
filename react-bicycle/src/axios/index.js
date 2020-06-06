/*
 * @Author: your name
 * @Date: 2020-06-06 18:02:37
 * @LastEditTime: 2020-06-06 18:09:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /antdBicycle/react-bicycle/react-bicycle/src/axios/index.js
 */
import JsonP from 'jsonp';
export default class Axios {
  static JsonP(options) {
    new Promise((resolve, reject) => {
      JsonP(
        options.url,
        {
          param: 'callback',
        },
        function (err, response) {
          // todo
        },
      );
    });
  }
}
