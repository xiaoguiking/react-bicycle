import React from 'react';
// import { Card, Table, Form, Modal, Button, message, Select, DatePicker } from 'antd';
import { Card } from 'antd';
import axios from './../../axios/index';
// import Utils from './../../utils';
import '../../style/common.less';
import './detail.less';
import { withRouter } from 'react-router-dom';
// import moment from 'moment';
/**
 * 订单详情
 *
 *
 *
 *
 *
 *地图功能
 * 创建ak，加载百度地图sdk
 * 地图初始化
 * 添加地图控件
 * 绘制用户行驶路线
 * 绘制服务区地图
 *
 */

// const FormItem = Form.Item;
// const Option = Select.Option;
// const { RangePicker } = DatePicker;

class OrderDetail extends React.Component {
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
    let orderId = this.props.location.pathname.split('/');

    console.log(orderId[4], 'props');
    if (orderId) {
      this.getOrderInfo(orderId[4]);
    }
  }

  // 数据请求id
  getOrderInfo = (orderId) => {
    axios
      .ajax({
        url: '/order/detail',
        data: {
          params: {
            orderId: orderId,
          },
        },
      })
      .then((res) => {
        // eslint-disable-next-line
        if (res.code == 0) {
          this.setState({
            orderInfo: res.result,
          });
          console.log(res.result);
        }
        this.renderMap(res.result);
      });
  };

  // 地图初始化
  renderMap(result) {
    this.map = new window.BMapGL.Map('orderDetailMap', { enableMapClick: false });
    // 创建地图实例
    var point = new window.BMapGL.Point(116.404, 39.915);
    this.map.enableScrollWheelZoom(true);
    // 创建点坐标
    this.map.centerAndZoom(point, 11);
    // 初始化地图，设置中心点坐标和地图级别
    this.addMapControl();
    // 调用绘制路线方法
    this.drawBikeRoute(result.position_list);
    // 调用服务区路线
    this.drawServiceArea(result.area);
  }

  // 添加地图控件
  addMapControl = () => {
    let map = this.map;
    map.addControl(new window.BMapGL.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }));
    map.addControl(new window.BMapGL.NavigationControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }));
  };

  // 绘制用户的行驶路线
  drawBikeRoute = (positionList) => {
    let map = this.map;
    let startPoint = '';
    let endPoint = '';
    if (positionList.length > 0) {
      let first = positionList[0];
      // let last = positionList.length - 1;
      let last = positionList[positionList.length - 1];
      // 起点
      startPoint = new window.BMapGL.Point(first.lon, first.lat);
      // console.log(startPoint, 'point');
      let startIcon = new window.BMapGL.Icon(
        '/assets/start_point.png',
        new window.BMapGL.Size(36, 42),
        {
          // 控件中图片的大小
          imageSize: new window.BMapGL.Size(36, 42),

          // 停靠的位置
          anchor: new window.BMapGL.Size(36, 42),
        },
      );
      let startMarker = new window.BMapGL.Marker(startPoint, { icon: startIcon });
      map.addOverlay(startMarker);

      // 终点
      endPoint = new window.BMapGL.Point(last.lon, last.lat);
      let endIcon = new window.BMapGL.Icon(
        '/assets/end_point.png',
        new window.BMapGL.Size(36, 42),
        {
          // 控件中图片的大小
          imageSize: new window.BMapGL.Size(36, 42),

          // 停靠的位置
          anchor: new window.BMapGL.Size(36, 42),
        },
      );
      let endMarker = new window.BMapGL.Marker(endPoint, { icon: endIcon });
      map.addOverlay(endMarker);

      // 链接起终点路线图
      let trackPoint = [];
      for (let i = 0; i < positionList.length; i++) {
        let point = positionList[i];
        trackPoint.push(new window.BMapGL.Point(point.lon, point.lat));
        // console.log(trackPoint[i].lng, 'trackPoint');
        var polyline = new window.BMapGL.Polyline(
          // [
          //   new BMapGL.Point(116.399, 39.91),
          //   new BMapGL.Point(116.405, 39.92),
          //   new BMapGL.Point(116.425, 39.9),

          // ],
          trackPoint,
          { strokeColor: '#1869AD', strokeWeight: 2, strokeOpacity: 0.5 },
        );
        map.addOverlay(polyline);
        this.map.centerAndZoom(endPoint, 11);
      }
    }
  };

  // // 绘制服务区
  drawServiceArea = (positionArea) => {
    let trackPoint = [];
    for (let i = 0; i < positionArea.length; i++) {
      let point = positionArea[i];
      trackPoint.push(new window.BMapGL.Point(point.lon, point.lat));
    }
    // 绘制服务区
    let polygon = new window.BMapGL.Polygon(trackPoint, {
      strokeColor: '#CE0000',
      strokeWeight: 4,
      strokeOpacity: 1,
      fillColor: '#ff8605',
      fillOpacity: 0.4,
    });
    this.map.addOverlay(polygon);
  };

  render() {
    const { orderInfo } = this.state;
    return (
      <div>
        <Card style={{ width: '100vw' }}>
          <div id="orderDetailMap" className="order-map"></div>
          <div className="detail-items">
            <div className="item-title">基础信息</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">用车模式</div>
                <div className="detail-form-content">
                  {orderInfo.mode === 1 ? '服务区' : '停车点'}
                </div>
              </li>
              <li>
                <div className="detail-form-left">订单编号</div>
                <div className="detail-form-content">{orderInfo.order_sn}</div>
              </li>
              <li>
                <div className="detail-form-left">车辆编号</div>
                <div className="detail-form-content">{orderInfo.bike_sn}</div>
              </li>
              <li>
                <div className="detail-form-left">用户姓名</div>
                <div className="detail-form-content">{orderInfo.user_name}</div>
              </li>
              <li>
                <div className="detail-form-left">手机号码</div>
                <div className="detail-form-content">{orderInfo.mobile}</div>
              </li>
            </ul>
          </div>
          <div className="detail-items">
            <div className="item-title">行驶轨迹</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">行程起点</div>
                <div className="detail-form-content">{orderInfo.start_location}</div>
              </li>
              <li>
                <div className="detail-form-left">行程终点</div>
                <div className="detail-form-content">{orderInfo.end_location}</div>
              </li>
              <li>
                <div className="detail-form-left">行程里程</div>
                <div className="detail-form-content">{orderInfo.distance / 1000}公里</div>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(OrderDetail);
