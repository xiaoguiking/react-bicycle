import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import './style/common.less';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft/index';
// import Home from './pages/Home';

export default class Admin extends Component {
  render() {
    return (
      <Fragment>
        <Row className="container">
          <Col span={3} className="nav-left">
            <NavLeft />
          </Col>
          <Col span={21} className="main">
            <Header />
            <Row className="content">
              {/*<Home />/*}
              {/* {this.props.children}加载子组件 */}
              {this.props.children}
            </Row>
            <Footer />
          </Col>
        </Row>
      </Fragment>
    );
  }
}
