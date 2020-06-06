/*
 * @Author: your name
 * @Date: 2020-06-06 12:34:30
 * @LastEditTime: 2020-06-06 23:16:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /antdBicycle/react-bicycle/react-bicycle/src/components/Header/index.js
 */

/*
 * 天气/时间
 */

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Utils from '../../utils';
import './index.less';
import { reqWeather } from '../../config/index';
import Axios from '../../axios';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '晴转多云',
      dayPictureUrl: '天气',
    };
  }

  // 获取天气信息显示
  getWeather = async () => {
    const { weather, dayPictureUrl } = await reqWeather('北京');
    console.log(weather, '12');
    // setWeather(weather);
    // setdayPictureUrl(dayPictureUrl);
    this.setState({
      weather,
      dayPictureUrl,
    });
  };

  // 获取天气信息
  getWeatherApiData() {
    let city = '北京';
    Axios.JsonP({
      url: `http://api.map.baidu.com/telematics/v3/weather?location=${city}&&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`,
    }).then((res) => {
      if (res.status === 'success') {
        let data = res.result[0].weather_data[0];
        console.log(data);
        this.setState({
          weather: data.weather,
          dayPictureUrl: data.dayPictureUrl,
        });
      }
    });
  }
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
    this.getWeatherApiData();
    this.getWeather();
  }

  componentWillUnmount() {
    clearInterval(this.state.sysTime);
  }
  render() {
    const { weather, dayPictureUrl } = this.state;
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎登陆&nbsp; &nbsp;{this.state.userName}</span>
            <a href="http:www.baidu.com">退出 </a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date"> {this.state.sysTime} </span>
            <span className="weather-img"> {dayPictureUrl}</span>
            {/*<img src={dayPictureUrl} alt="天气" />*/}
            <span className="weather-detail">{weather}</span>
          </Col>
        </Row>
      </div>
    );
  }
}
