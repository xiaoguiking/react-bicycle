/*
 * @Author: your name
 * @Date: 2020-06-06 16:50:04
 * @LastEditTime: 2020-06-06 22:57:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /antdBicycle/react-bicycle/react-bicycle/src/utils/index.js
 */
export default {
  formateDate(time) {
    function checkTime(time) {
      return time < 10 ? '0' + time : time;
    }
    if (!time) return '';
    let date = new Date(time);
    return (
      date.getFullYear() +
      '-' +
      checkTime(date.getMonth() + 1) +
      '-' +
      checkTime(date.getDate()) +
      ' ' +
      checkTime(date.getHours()) +
      ':' +
      checkTime(date.getMinutes()) +
      ':' +
      checkTime(date.getSeconds())
    );
  },
};
