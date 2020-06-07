import JsonP from 'jsonp';
/**
 * jsonp 封装
 */
export default class Axios {
  static JsonP(options) {
    return new Promise((resolve, reject) => {
      JsonP(
        options.url,
        {
          param: 'callback',
        },
        function (err, response) {
          // todo
          debugger;
          if (response.status === 'success') {
            resolve(response);
          } else {
            reject(response.message);
          }
        },
      );
    });
  }
}
