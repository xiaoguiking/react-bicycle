import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';
/**
 * jsonp 封装
 * axios封装
 */
export default class Axios {
  static requestList(url, params) {
    var data = {
      params: params,
    };
    this.ajax({
      url,
      params,
    }).then((res) => {
      if (data && data.result) {
        // 动态添加key
        let list = data.res.result.map((item, index) => {
          item.key1 = index;
          return item;
        });
        this.setState({
          list,
          dataPagination: res.result,
          // // 清空每次的选择
          // selectedRowKeys: [],
          // sel ectedRows: null,
          // 分页
          pagination: Utils.pagination(res, (current) => {
            // todo
            _this.params.page = current;
            this.requestDPagination();
          }),
        });
      }
    });
  }
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

  static ajax(options) {
    // 统一处理loading 加载效果
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById('ajaxLoading');
      loading.style.display = 'block';
    }
    // let baseUrl = 'https://mock.yonyoucloud.com/mock/7866/table/list';
    let baseUrl = 'https://mock.yonyoucloud.com/mock/7866/';
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseUrl,
        timeout: 5000,
        params: (options.data && options.data.params) || '',
      }).then((response) => {
        if (options.data && options.data.isShowLoading !== false) {
          loading = document.getElementById('ajaxLoading');
          loading.style.display = 'none';
        }
        // http请求自身200 成功
        // eslint-disable-next-line
        if (response.status == '200') {
          let res = response.data;
          // 业务后端接口为0
          // eslint-disable-next-line
          if (res.code == '0') {
            resolve(res);
          } else {
            Modal.info({
              title: '提示',
              content: res.msg,
            });
          }
        } else {
          reject(response.data);
        }
      });
    });
  }
}
