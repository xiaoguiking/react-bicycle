import React from 'react';
import { Table, Card, Button, Modal, message } from 'antd';
import axios from '../../../axios/index';

/**
 * 表格
 */
export default class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      dataSource: [],
      dataList: [],
      loading: false,
    };
  }

  componentWillMount() {
    this.requestData2();
  }
  componentDidMount() {
    const data = [
      {
        id: 0,
        name: 'Jack',
        age: '34',
        sex: '男',
        state: '1',
        bir: '1993-2-2',
        address: '北京',
        time: '9:00',
      },
      {
        id: 1,
        name: 'Jack',
        age: '34',
        sex: '男',
        state: '1',
        bir: '1993-2-2',
        address: '北京',
        time: '9:00',
      },
      {
        id: 2,
        name: 'Jack',
        age: '34',
        sex: '男',
        state: '1',
        bir: '1993-2-2',
        address: '北京',
        time: '9:00',
      },
      {
        id: 3,
        name: 'Jack',
        age: '34',
        sex: '男',
        state: '1',
        bir: '1993-2-2',
        address: '北京',
        time: '9:00',
      },
    ];
    this.setState({
      dataSource: data,
    });
  }

  // 动态表格渲染
  // requestData2 = () => {
  //   axios.get('https://mock.yonyoucloud.com/mock/7866/table/list').then((res) => {
  //     console.log(res.data.result);
  //     if (res.status === '200') {
  //       this.setState({
  //         dataList: res.data.result,
  //       });
  //     }
  //   });
  // };

  // 封装axios 动态渲染表格数据
  requestData2 = () => {
    axios
      .ajax({
        url: 'table/list',
        data: {
          params: {
            page: 1,
          },
          // isShowLoading: false, 设置isShowLoading false 不会出现Loading
        },
      })
      .then((res) => {
        // eslint-disable-next-line
        if (res.code == 0) {
          // 动态添加key
          // res.result.map((item,index) =>  {
          //   item.key1 = index;
          // })
          this.setState({
            dataList: res.result,
            // 清空每次的选择
            selectedRowKeys: [],
            selectedRows: null,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 选中每一项
  onRowClick = (record, index) => {
    Modal.info({
      title: '查看内容框',
      content: `用户名：${record.name}, 用户状态：${record.state}`,
    });
    let selectKey = [index + 1];
    this.setState({
      selectedRowKeys: selectKey,
      selectItem: record,
    });
    console.log(record, index, 'onRow');
  };

  // 编辑删除操作
  add = () => {
    let item = this.state.selectItem;
    console.log(item);
    if (item.id) {
      // TODO
    }
  };

  // 多选删除操作
  handleDelete = () => {
    let rows = this.state.selectedRows;
    let ids = [];
    rows.map((item) => {
      return ids.push(item.id);
    });
    Modal.confirm({
      title: '删除提示',
      content: `您确定要删除这些数据${ids.join(',')}?`,
      onOk: () => {
        message.success('删除成功');
        // 删除完成再次请求
        this.requestData2();
      },
    });
  };

  render() {
    const { dataSource, dataList, selectedRowKeys } = this.state;
    console.log(dataList, 'data获取数据');
    const style = {
      width: 'calc(85vw)',
    };

    // 返回的对应结构1
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
      },
      {
        title: '生日',
        dataIndex: 'bir',
        key: 'bir',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '早起时间',
        dataIndex: 'time',
        key: 'time',
      },
    ];

    // 返回的对应结构1
    const columns1 = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        render(sex) {
          return sex === 1 ? '男' : '女';
        },
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        render(state) {
          let config = {
            '1': '风华绝代',
            '2': '陌生如遇',
            '3': '一剑隔世',
            '4': '乱舞春秋',
            '5': '离歌',
          };
          return config[state];
        },
      },
      {
        title: '生日',
        dataIndex: 'bir',
        key: 'bir',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '早起时间',
        dataIndex: 'time',
        key: 'time',
      },
    ];

    // 单选
    const rowSelection = {
      type: 'radio',
      // 指定选中项的key数组 ,不加没有选中效果
      selectedRowKeys,
    };

    // 复选
    const rowCheckSelection = {
      type: 'checkbox',
      // 指定选中项的key数组 ,不加没有选中效果
      selectedRowKeys,
      // 当前选中行，选中的行
      onChange: (selectedRowKeys, selectedRows) => {
        // let ids = [];
        // selectedRows.map((item) => {
        //   ids.push(item.id);
        // });
        this.setState({
          selectedRowKeys,
          // selectedIds: ids,
          selectedRows,
        });
      },
    };

    return (
      <div style={style}>
        <Card title="基础表格">
          <Table columns={columns} bordered rowKey="id" dataSource={dataSource || []} />
        </Card>
        <Card title="动态渲染表格">
          <Table columns={columns1} bordered rowKey="id" dataSource={dataList} />
        </Card>
        <Card title="Mock-单选 ">
          <Table
            columns={columns1}
            // 点击每一行效果
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                }, // 点击行
              };
            }}
            bordered
            rowKey="id"
            dataSource={dataList}
            rowSelection={rowSelection}
          />
        </Card>
        <Card title="Mock-复选 ">
          <div style={{ marginBottom: '15px' }}>
            <Button type="primary" onClick={this.handleDelete}>
              删除
            </Button>
          </div>
          <Table
            columns={columns1}
            // 点击每一行效果
            bordered
            rowKey="id"
            dataSource={dataList}
            rowSelection={rowCheckSelection}
          />
        </Card>
      </div>
    );
  }
}
