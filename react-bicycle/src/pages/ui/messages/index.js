/**
 * 全局提醒框
 */
import React from 'react';
import { Card, Button, message } from 'antd';

const Message = () => {
  const style = {
    width: 'calc(85vw)',
  };
  const showMessage = (type) => {
    message[type]('这是一个全局提示框');
  };

  return (
    <div style={style}>
      <Card title="全局提醒框">
        <Button
          type="primary"
          style={{ marginRight: 20 }}
          onClick={() => {
            showMessage('success');
          }}
        >
          success
        </Button>
        <Button
          type="primary"
          style={{ marginRight: 20 }}
          onClick={() => {
            showMessage('info');
          }}
        >
          info
        </Button>
        <Button
          type="primary"
          style={{ marginRight: 20 }}
          onClick={() => {
            showMessage('warning');
          }}
        >
          warning
        </Button>
        <Button
          type="primary"
          style={{ marginRight: 20 }}
          onClick={() => {
            showMessage('error');
          }}
        >
          error
        </Button>
        <Button
          type="primary"
          style={{ marginRight: 20 }}
          onClick={() => {
            showMessage('loading');
          }}
        >
          loading
        </Button>
      </Card>
    </div>
  );
};

export default Message;
