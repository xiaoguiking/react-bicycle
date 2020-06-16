import React, { useState } from 'react';
import { Card, Spin, Alert, Space, Switch } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const style = {
  width: 'calc(85vw)',
};

// const Icon = () => {
//   return <LoadingOutlined type="loading" />;
// };
const Icon = <LoadingOutlined />;

const Loadings = () => {
  const [loading, setLoading] = useState(false);
  console.log(loading, '12');
  const toggle = () => {
    console.log(1);
    setLoading(!loading);
  };

  return (
    <div style={style}>
      <Card title="Spin用法">
        <Space size="middle">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
          <Spin indicator={Icon} />
        </Space>
      </Card>
      <Card title="内容遮罩">
        <Spin spinning={loading}>
          <Alert description="这是alert" type="info" />
        </Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：
          <Switch checked={loading} onChange={toggle} />
        </div>
        <Alert description="这是警告alert" type="warning" />
        <Spin>
          <Alert message="react" description="这是警告alert" type="warning" />
        </Spin>
        <Spin tip="加载中">
          <Alert message="react" description="这是警告alert" type="warning" />
        </Spin>
        <Spin indicator={Icon}>
          <Alert message="react" description="这是警告alert" type="warning" />
        </Spin>
      </Card>
      <Card title="Spin用法">123</Card>
    </div>
  );
};

export default Loadings;
