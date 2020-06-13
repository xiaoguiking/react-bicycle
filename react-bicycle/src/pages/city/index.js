import React from 'react';
import { Card, Table, Form, Modal, Button, message, Select } from 'antd';
import axios from './../../axios/index';
import Utils from './../../utils';
import '../../style/common.less';
/**
 * 城市管理
 *
 * 子组件 一： 选择表单
 * 子组件二： 开通城市
 */

const FormItem = Form.Item;
const Option = Select.Option;

export default class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isShowCity: false,
    };
  }

  params = {
    page: 1,
  };

  componentDidMount() {
    this.requestCity();
  }

  // 接口数据
  requestCity = () => {
    let _this = this;
    axios
      .ajax({
        url: 'city/list',
        method: 'get',
        data: {
          params: {
            page: this.params.page,
          },
        },
      })
      .then((res) => {
        // eslint-disable-next-line
        if (res.code == 0) {
          console.log(res.result, '数据');
          this.setState({
            list: res.result.map((item, index) => {
              item.key = index;
              return item;
            }),

            // dataList: res.result,
            pagination: Utils.pagination(res, (current) => {
              _this.params.page = current;
              this.requestCity();
            }),
          });
        }
      });
  };

  // 开通城市
  handleOpenCity = () => {
    console.log(2);
    this.setState({
      isShowCity: true,
    });
  };

  // 开通城市取消
  handleCancel = () => {
    this.setState({
      isShowCity: false,
    });
  };
  // 开通城市提交
  handleOk = () => {};
  render() {
    const style = {
      width: 'calc(85vw)',
    };

    const { list, pagination } = this.state;

    const columns = [
      {
        title: '城市ID',
        dataIndex: 'id',
      },
      {
        title: '城市名称',
        dataIndex: 'name',
      },
      {
        title: '用车模式',
        dataIndex: 'mode',
        render(mode) {
          return mode === 1 ? '停车点' : '禁停区';
        },
      },
      {
        title: '营运模式',
        dataIndex: 'op_mode',
        render(op_mode) {
          return op_mode === 1 ? '自营' : '加盟';
        },
      },
      {
        title: '授权加盟商',
        dataIndex: 'franchisee_name',
      },
      {
        title: '城市管理员',
        dataIndex: 'city_admins',
        render(arr) {
          // console.log(arr, 'arr');
          //处理数组类型
          return arr
            .map((item) => {
              return item.user_name;
            })
            .join(',');
        },
      },
      {
        title: '城市开通时间',
        dataIndex: 'open_time',
        // render: Utils.formateDate,
      },
      {
        title: '操作时间',
        dataIndex: 'update_time',
        // render: Utils.formateDate, //格式化时间戳
      },
      {
        title: '操作人',
        dataIndex: 'sys_user_name',
      },
    ];

    return (
      <div style={style}>
        <Card style={{ marginTop: 10 }}>
          <FilterForm />
        </Card>
        <Card style={{ marginTop: 10 }}>
          <Button type="primary" onClick={this.handleOpenCity}>
            开通城市
          </Button>
        </Card>
        <div className="content-wrap">
          <Table
            columns={columns}
            bordered
            rowKey="id"
            dataSource={list}
            pagination={pagination}
            scroll={{ y: 540 }}
          />
        </div>
        <Modal
          title="开通城市"
          visible={this.state.isShowCity}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <OpenCityForm />
        </Modal>
      </div>
    );
  }
}

// 子组件 一： 选择表单
class FilterForm extends React.Component {
  render() {
    return (
      <div>
        <Form layout="inline" onFinish={this.onFinish}>
          <FormItem label="城市" name="city_id">
            <Select style={{ width: 100 }} placeholder="全部">
              <Option value="">全部</Option>
              <Option value="1">北京市</Option>
              <Option value="2">天津市</Option>
              <Option value="3">深圳市</Option>
            </Select>
          </FormItem>
          <FormItem label="用车模式" name="mode">
            <Select style={{ width: 120 }} placeholder="全部">
              <Option value="">全部</Option>
              <Option value="1">指定停车点模式</Option>
              <Option value="2">禁停区模式</Option>
            </Select>
          </FormItem>
          <FormItem label="营运模式" name="op_mode">
            <Select style={{ width: 80 }} placeholder="全部">
              <Option value="">全部</Option>
              <Option value="1">自营</Option>
              <Option value="2">加盟</Option>
            </Select>
          </FormItem>
          <FormItem label="加盟商授权状态" name="auth_status">
            <Select style={{ width: 100 }} placeholder="全部">
              <Option value="">全部</Option>
              <Option value="1">已授权</Option>
              <Option value="2">未授权</Option>
            </Select>
          </FormItem>
          <FormItem>
            <Button type="primary" style={{ margin: '0 20px' }} htmlType="submit">
              查询
            </Button>
            <Button>重置</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

// 子组件二： 开通城市
class OpenCityForm extends React.Component {
  render() {
    const formItemLayout = {
      labelCol: {
        span: 5,
      },
      wrapperCol: {
        span: 19,
      },
    };

    return (
      <Form layout="horizontal">
        <FormItem label="选择城市" {...formItemLayout} name="city_id">
          <Select style={{ width: 100 }}>
            <Option value="">全部</Option>
            <Option value="1">北京市</Option>
            <Option value="2">天津市</Option>
          </Select>
        </FormItem>
        <FormItem label="营运模式" {...formItemLayout} name="op_mode">
          <Select style={{ width: 100 }}>
            <Option value="1">自营</Option>
            <Option value="2">加盟</Option>
          </Select>
        </FormItem>
        <FormItem label="用车模式" {...formItemLayout} name="use_mode">
          <Select style={{ width: 100 }}>
            <Option value="1">指定停车点</Option>
            <Option value="2">禁停区</Option>
          </Select>
        </FormItem>
      </Form>
    );
  }
}
