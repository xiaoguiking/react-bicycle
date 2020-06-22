import React from 'react';
// import { Card, Table, Form, Modal, Button, message, Select, DatePicker } from 'antd';
import { Card } from 'antd';
// import axios from './../../axios/index';
// import Utils from './../../utils';
// import '../../style/common.less';
import './detail.less';
// import moment from 'moment';
/**
 * 订单详情
 */

// const FormItem = Form.Item;
// const Option = Select.Option;
// const { RangePicker } = DatePicker;

export default class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      selectedRowKeys: [],
      isShowCity: false,
      orderInfo: [],
    };
  }

  componentDidMount() {
    // let orderId = this.props.match.params.orderId;
    console.log(this.props);
    // console.log(orderId);
  }

  // 数据请求id
  getOrderInfo = (orderId) => {};

  render() {
    return (
      <div>
        <Card>
          <div id="orderDetailMap" className="order-map"></div>
          <div className="detail-items">
            <div className="item-title">基础信息</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">用车模式</div>
                <div className="detail-form-content">{'info.mode'}</div>
              </li>
              <li>
                <div className="detail-form-left">订单编号</div>
                <div className="detail-form-content">{'info.order_sn'}</div>
              </li>
              <li>
                <div className="detail-form-left">车辆编号</div>
                <div className="detail-form-content">{'info.bike_sn'}</div>
              </li>
              <li>
                <div className="detail-form-left">用户姓名</div>
                <div className="detail-form-content">{'info.user_name'}</div>
              </li>
              <li>
                <div className="detail-form-left">手机号码</div>
                <div className="detail-form-content">{'info.mobile'}</div>
              </li>
            </ul>
          </div>
          <div className="detail-items">
            <div className="item-title">行驶轨迹</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">行程起点</div>
                <div className="detail-form-content">{'info.start_location'}</div>
              </li>
              <li>
                <div className="detail-form-left">行程终点</div>
                <div className="detail-form-content">{'info.end_location'}</div>
              </li>
              <li>
                <div className="detail-form-left">行程里程</div>
                <div className="detail-form-content">{'info.distance / 1000'}公里</div>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    );
  }
}
