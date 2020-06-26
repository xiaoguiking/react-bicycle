import React from 'react';
// import { Table, Card, Button, Modal, message } from 'antd';
import { Table, Card } from 'antd';
import axios from '../../../axios/index';
import Utils from './../../../utils/index';

/**
 * 高级表格
 * 后续补充
 */
export default class highTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
    };
  }
  params = {
    page: 1,
  };

  componentDidMount() {
    this.requestList();
  }
  // 请求接口数据
  requestList = () => {
    let _this = this;
    axios
      .ajax({
        url: 'table/list_1',
        data: {
          params: { page: this.params.page },
        },
      })
      .then((res) => {
        // eslint-disable-next-line
        if (res.code == 0) {
          this.setState({
            dataList: res.result,
            pagination: Utils.pagination(res, (current) => {
              _this.params.page = current;
              this.requestList();
            }),
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const style = {
      width: 'calc(85vw)',
    };
    const { dataList, pagination } = this.state;
    // 返回的对应结构
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        width: 150,
        fixed: 'left',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: 150,
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        width: 150,
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        width: 70,
        render(sex) {
          return sex === 1 ? '男' : '女';
        },
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        width: 200,
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
        width: 150,
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
        width: 150,
      },
      {
        title: '早起时间',
        dataIndex: 'time',
        key: 'time',
        width: 150,
        fixed: 'right',
      },
    ];

    return (
      <div style={style}>
        <Card title="头部固定">
          <Table
            columns={columns}
            bordered
            rowKey="id"
            dataSource={dataList}
            pagination={pagination}
            scroll={{ y: 240 }}
          />
        </Card>
        <Card title="固定头列">
          <Table
            columns={columns}
            bordered
            rowKey="id"
            dataSource={dataList}
            pagination={pagination}
            scroll={{ x: 1500, y: 200 }}
          />
        </Card>
      </div>
    );
  }
}
