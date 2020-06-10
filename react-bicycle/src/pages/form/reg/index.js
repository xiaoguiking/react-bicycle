import React from 'react';
import { Card } from 'antd';

export default class FormReg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = {
      width: 'calc(85vw)',
    };
    return (
      <div style={style}>
        <Card>登录</Card>
      </div>
    );
  }
}
