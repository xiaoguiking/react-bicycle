import React from 'react';
import { Card, Table, Form, Modal, Button, message, Select, DatePicker } from 'antd';
import axios from './../../axios/index';
import Utils from './../../utils';
import '../../style/common.less';
import moment from 'moment';

/**
 * 订单管理 order
 *
 * 子组件 一： 选择表单
 * 子组件二： 开通城市
 *
 */

const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      selectedRowKeys: [],
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
        url: 'order/list',
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
            list: res.result.item_list.map((item, index) => {
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

  // 选中每一项
  onRowClick = (record, index) => {
    // Modal.info({
    //   title: '查看内容框',
    //   content: `用户名：${record.user_id}, 用户状态：${record.id}`,
    // });
    let selectKey = [index + 1];
    this.setState({
      selectedRowKeys: selectKey,
      selectItem: record,
    });

    console.log(record, index, 'onRow');
  };

  // 订单详情
  openOrderDetail = () => {
    let item = this.state.selectItem;
    if (!item) {
      Modal.info({
        title: '订单提示',
        content: '请先选择一条订单',
      });
      return;
    }
    window.open(`/#/common/order/detail/${item.id}`, '_blank');
    // window.location.href = `/#/common/order/123${id}`;
  };

  // 开通城市取消
  handleCancel = () => {
    this.setState({
      isShowCity: false,
    });
  };
  // 开通城市提交 onSubmit
  handleOk = () => {
    this.setState({
      isShowCity: false,
    });
  };

  handleSubmit = () => {
    this.setState({
      isShowCity: false,
    });
  };

  handleSubmit = () => {
    axios
      .ajax({
        url: '/city/open',
        data: {
          // params: cityInfo
        },
      })
      .then((res) => {
        // eslint-disable-next-line
        if (res.code == '0') {
          message.success('开通成功');
          this.setState({
            isShowCity: false,
          });
          this.requestCity();
        }
      });
  };

  render() {
    const style = {
      width: 'calc(85vw)',
    };

    const { list, pagination, selectedRowKeys } = this.state;

    const columns = [
      {
        title: '订单编号',
        dataIndex: 'id',
      },
      {
        title: '车辆编号',
        dataIndex: 'order_sn',
      },
      {
        title: '用户名',
        dataIndex: 'user_name',
      },
      {
        title: '手机号码',
        dataIndex: 'mobile',
      },
      {
        title: '里程',
        dataIndex: 'distance',
      },
      {
        title: '行程时长',
        dataIndex: 'total_time',
      },
      {
        title: '状态',
        dataIndex: 'status',
      },
      {
        title: '开始时间',
        dataIndex: 'start_time',
        render: Utils.formateDate,
        width: 150,
        // render(open_time) {
        //   const openTime = moment(open_time).format('YYYY-MM-DD');
        //   return <div>{openTime}</div>;
        // },
      },
      {
        title: '操作时间',
        dataIndex: 'end_time',
        // render: Utils.formateDate, //格式化时间戳
        width: 150,
        render(update_time) {
          const upTime = moment(update_time).format('YYYY-MM-DD');
          return <div>{upTime}</div>;
        },
      },
      {
        title: '订单金额',
        dataIndex: 'total_fee',
      },
      {
        title: '实付金额',
        dataIndex: 'user_pay',
      },
    ];

    // 单选
    const rowSelection = {
      type: 'radio',
      // 指定选中项的key数组 ,不加没有选中效果
      selectedRowKeys,
    };

    return (
      <div style={style}>
        <Card style={{ marginTop: 10 }}>
          <FilterForm />
        </Card>
        <Card style={{ marginTop: 10 }}>
          <Button type="primary" onClick={this.openOrderDetail} style={{ marginRight: 20 }}>
            订单详情
          </Button>
          <Button type="primary" onClick={this.handleOpenCity}>
            结束订单
          </Button>
        </Card>
        <div className="content-wrap">
          <Table
            columns={columns}
            bordered
            rowKey="id"
            rowSelection={rowSelection}
            dataSource={list}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                }, // 点击行
              };
            }}
            pagination={pagination}
            scroll={{ y: 540 }}
          />
        </div>
        <Modal
          title="开通城市"
          visible={this.state.isShowCity}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
          forceRender={true}
        >
          <OpenCityForm
            wrappedComponentRef={(inst) => {
              this.cityForm = inst;
            }}
          />
        </Modal>
      </div>
    );
  }
}

// 子组件 一： 选择表单
class FilterForm extends React.Component {
  onFinish(values) {
    console.log(values, '1');
  }
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
          <FormItem label="订单时间" name="mode">
            <RangePicker placeholder={['开始日期', '结束日期']} />
          </FormItem>
          <FormItem label="订单状态" name="op_mode">
            <Select placeholder="全部" style={{ width: '200px' }}>
              <Option value="">全部</Option>
              <Option value="1">进行中</Option>
              <Option value="2">结束行程</Option>
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

// // 子组件二： 开通城市
class OpenCityForm extends React.Component {
  formRef = React.createRef();
  render() {
    const formItemLayout = {
      labelCol: {
        span: 5,
      },
      wrapperCol: {
        span: 19,
      },
    };
    // const [form] = Form.useForm();
    return (
      <Form
        layout="horizontal"
        initialValues={{
          city_id1: '',
          op_mode1: '1',
          use_mode1: '1',
        }}
        // form={form}
        ref={this.formRef}
      >
        <FormItem label="选择城市" {...formItemLayout} name="city_id1">
          <Select style={{ width: 250 }}>
            <Option value="">全部</Option>
            <Option value="1">北京市</Option>
            <Option value="2">天津市</Option>
          </Select>
        </FormItem>
        <FormItem label="营运模式" {...formItemLayout} name="op_mode1">
          <Select style={{ width: 250 }}>
            <Option value="1">自营</Option>
            <Option value="2">加盟</Option>
          </Select>
        </FormItem>
        <FormItem label="用车模式" {...formItemLayout} name="use_mode1">
          <Select style={{ width: 250 }}>
            <Option value="1">指定停车点</Option>
            <Option value="2">禁停区</Option>
          </Select>
        </FormItem>
      </Form>
    );
  }
}
