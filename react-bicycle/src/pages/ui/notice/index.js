/**
 * 通知提醒框Notification
 */
import React from 'react';
import { Card, Button, notification } from 'antd';
const Notice = () => {
  const style = {
    width: 'calc(85vw)',
  };
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" size="small" onClick={() => notification.close(key)}>
      Confirm
    </Button>
  );

  const openNotice = (type, direction) => {
    if (direction) {
      console.log(direction, '位置');
      notification.config({
        placement: direction,
        message: 'Notification Title',
        description: `${type}提醒框`,
      });
    }
    console.log(type);
    notification[type]({
      message: 'Notification Title',
      description: `${type}提醒框`,
    });
    setTimeout(() => {
      notification[type]({
        message: 'Notification Title',
        description: `延时提醒${type}`,
        btn,
        key,
      });
    }, 2000);
  };

  return (
    <div style={style}>
      <Card title="通知提醒框">
        <Button
          type="primary"
          style={{ marginRight: 20 }}
          onClick={() => {
            openNotice('success');
          }}
        >
          success
        </Button>
        <Button
          type="primary"
          style={{ marginRight: 20 }}
          onClick={() => {
            openNotice('info');
          }}
        >
          info
        </Button>
        <Button
          type="primary"
          style={{ marginRight: 20 }}
          onClick={() => {
            openNotice('warning');
          }}
        >
          warning
        </Button>
        <Button
          type="primary"
          style={{ marginRight: 20 }}
          onClick={() => {
            openNotice('error');
          }}
        >
          error
        </Button>
      </Card>
      <Card title="通知提醒框位置">
        <Button
          type="primary"
          style={{ marginRight: 20 }}
          onClick={() => {
            openNotice('success', 'topLeft');
          }}
        >
          success
        </Button>
        <Button
          type="primary"
          style={{ marginRight: 20 }}
          onClick={() => {
            openNotice('info', 'topRight');
          }}
        >
          info
        </Button>
        <Button
          type="primary"
          style={{ marginRight: 20 }}
          onClick={() => {
            openNotice('warning', 'bottomLeft');
          }}
        >
          warning
        </Button>
        <Button
          type="primary"
          style={{ marginRight: 20 }}
          onClick={() => {
            openNotice('error', 'bottomRight');
          }}
        >
          error
        </Button>
      </Card>
    </div>
  );
};

export default Notice;
