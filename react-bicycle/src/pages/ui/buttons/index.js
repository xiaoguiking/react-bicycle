import React from 'react';
import { Card, Button, Radio } from 'antd';
import '../index.less';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  DownloadOutlined,
  LeftOutlined,
  RightOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';
/**
 * 按钮buttons 界面
 */
export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      loadings: [],
      size: 'large',
    };
  }

  handleCloseLoading = () => {
    this.setState({
      loading: false,
    });
  };
  // loading 状态
  enterLoading = (index) => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 6000);
  };
  // 改变大小
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };
  render() {
    const { loading, loadings, size } = this.state;
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
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[1]}
            onClick={() => this.enterLoading(1)}
          >
            Click me!
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
        <Card title="按钮尺寸">
          <Radio.Group value={size} onChange={this.handleSizeChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={size}>
            king
          </Button>
          <Button size={size}>king</Button>
          <Button type="dashed" size={size}>
            king
          </Button>
          <Button type="danger" size={size}>
            king
          </Button>
          <Button disabled size={size}>
            king
          </Button>
        </Card>
      </div>
    );
  }
}
