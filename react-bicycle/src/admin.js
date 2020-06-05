import React, { Component, Fragment } from "react";
import { Row, Col } from "antd";
import "./style/common.less";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft/index";

export default class Admin extends Component {
  render() {
    return (
      <Fragment>
        <Row className="container">
          <Col span={3} className="nav-left">
            <NavLeft />
          </Col>
          <Col span={21} className="main">
            <Header></Header>
            <Row className="content">
              Content
              {/* {this.props.children}加载子组件 */}
            </Row>
            <Footer />
          </Col>
        </Row>
      </Fragment>
    );
  }
}
