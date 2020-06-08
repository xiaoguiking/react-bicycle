import React from 'react';
import { Table, Card } from 'antd';
import axios from 'axios';
/**
 * 表格
 */
export default class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      dataSource2: [],
    };
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

    this.requestData2();
  }

  // 动态表格渲染
  requestData2 = () => {
    axios.get('https://mock.yonyoucloud.com/mock/7866/table/list').then((res) => {
      console.log(res.data.result[0]);
      if (res.status === '200' && res.data.code == 0) {
        this.setState({
          dataSource2: res.data.result,
        });
      }
    });
  };

  render() {
    const { dataSource, dataSource2 } = this.state;
    console.log(dataSource2, 'data获取数据');
    const style = {
      width: 'calc(85vw)',
    };

    // 返回的对应结构1
    const columns = [
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

    return (
      <div style={style}>
        <Card title="基础表格">
          <Table columns={columns} bordered rowKey="1" dataSource={dataSource || []} />
        </Card>
        <Card title="动态数据渲染表格">
          <Table columns={columns1} bordered rowKey="2" dataSource={dataSource2 || []} />
        </Card>
      </div>
    );
  }
}
