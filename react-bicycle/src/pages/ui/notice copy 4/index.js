/**
 * 全局提醒框
 */
import React from 'react';
import { Card, Button, Radio, message } from 'antd';
const Notice = () => {
  const style = {
    width: 'calc(85vw)',
  };
  const openNotice = () => {
    message.info('这是一个全局提示框');
  };

  return (
    <div style={style}>
      <Card title="全局提醒框">
        <Button type="primary" onClick={openNotice}>
          open message
        </Button>
      </Card>
    </div>
  );
};

export default Notice;
