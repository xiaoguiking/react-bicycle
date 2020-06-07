import React from 'react';
import { Card, Button } from 'antd';
import '../index.less';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  DownloadOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
/**
 * 按钮buttons 界面
 */
export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  handleCloseLoading = () => {
    this.setState({
      loading: false,
    });
  };
  render() {
    const { loading } = this.state;
    return (
      <div className="button-page">
        <Card title="基础按钮">
          <Button type="primary">king</Button>
          <Button>king</Button>
          <Button type="dashed">king</Button>
          <Button type="danger">king</Button>
          <Button disabled>king</Button>
        </Card>
        <Card title="图形按钮">
          <Button type="primary" icon={<PlusOutlined />}>
            创建
          </Button>
          <Button icon={<EditOutlined />}>编辑</Button>
          <Button type="dashed" icon={<DeleteOutlined />}>
            删除
          </Button>
          <Button type="danger" shape="circle-outline">
            <SearchOutlined />
          </Button>
          <Button type="primary">
            <DownloadOutlined />
            下载
          </Button>
        </Card>
        <Card title="loading按钮">
          <Button type="primary" loading={loading}>
            确定
          </Button>
          <Button type="primary" shape="circle" loading={loading}></Button>
          <Button loading={loading}>点击加载</Button>
          <Button type="primary" onClick={this.handleCloseLoading}>
            关闭
          </Button>
        </Card>
        <Card title="按钮组">
          <Button.Group>
            <Button icon={<LeftOutlined />} type="primary">
              返回
            </Button>
            <Button icon={<RightOutlined />} type="primary">
              前进
            </Button>
          </Button.Group>
        </Card>
      </div>
    );
  }
}
