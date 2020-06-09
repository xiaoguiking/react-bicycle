/**
 * 插件封装集合
 * 1.日期插件
 * 2.
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
  pagination(data, callback) {
    return {
      onChange: (current) => {
        callback(current);
      },
      // value 对应的真实数据字段
      current: data.page,
      pageSize: data.page_size,
      total: data.total,
      showTotal: () => {
        return `共有${data.total}条`;
      },
      showQuickJumper: true,  
    };
  },
};
