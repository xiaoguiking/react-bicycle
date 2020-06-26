/**
 * 类似admin 组件的功能页面 涉及所有详情页面布局
 */
import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import './style/common.less';
import Header from './components/Header';
import OrderDetail from './pages/order/detail';

export default class Common extends Component {
  render() {
    return (
      <Fragment>
        <Row className="simple-page">
          <Col span={24}>
            <Header menuType="second" />
            <Row className="content">
              {/*<Home />/*}
              {/* {this.props.children}加载子组件 */}
              <OrderDetail />
            </Row>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

// {this.props.children}
//
