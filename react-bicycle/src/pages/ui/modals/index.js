import React from 'react';
import { Card, Modal } from 'antd';
/**
 * 弹框
 */
export default class Modals extends React.Component {
  render() {
    const style = {
      width: 'calc(85vw)',
    };
    return (
      <div style={style}>
        <Card title="基础模态框"></Card>
      </div>
    );
  }
}
