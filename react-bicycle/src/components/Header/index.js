/*
 * @Author: xiaoguiking
 * @Date: 2020-06-06 12:34:30
 * @LastEditTime: 2020-06-06 17:36:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * 天气/时间
 */

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Utils from '../../utils';
import './index.less';
import { reqWeather } from '../../config/index';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
      dayPictureUrl: '',
    };
  }

  // 获取天气信息显示
  getWeather = async () => {
    const { weather, dayPictureUrl } = await reqWeather('北京');
    // setWeather(weather);
    // setdayPictureUrl(dayPictureUrl);
    this.setState({
      weather,
      dayPictureUrl,
    });
  };
  // // 显示天气jsonp 请求
  // useEffect(() => {
  //     getWeather();
  // }, [])

  componentWillMount() {
    this.setState({
      userName: 'xiaoguiking',
    });

    // 获取时间
    let sysTime;
    setInterval(() => {
      sysTime = Utils.formateDate(new Date().getTime());
      // console.log(sysTime);
      this.setState({
        sysTime,
      });
    }, 1000);
  }

  componentDidMount() {
    this.getWeather();
  }

  componentWillUnmount() {
    console.log(1);
    clearInterval(this.state.sysTime);
  }
  render() {
    console.log(this.state.weather);
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎登陆{this.state.userName}</span>
            <a href="http:www.baidu.com">退出 </a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            {/* <span className="date"> {this.state.sysTime} </span> */}
            <span className="weather-detail">
              {this.state.weather}
              {this.state.dayPictureUrl}
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}
