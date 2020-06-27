import React from 'react';
import { Card } from 'antd';
// 全部加载
// import echarts from 'echarts';
// 按需加载
// import echartTheme
// import echarts from 'echarts/lib/echarts';
// 导入柱形图
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/title';
import ReactEcharts from 'echarts-for-react';

export default class Bar extends React.Component {
  // 配置主题
  componentWillMount() {
    // echarts.registerTheme();
  }
  // 配置option
  getOption = () => {
    let option = {
      title: {
        text: '用户骑行订单',
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '订单量',
          type: 'bar',
          data: [500, 300, 230, 900, 1000, 2000, 400],
        },
      ],
    };
    return option;
  };

  // 配置option
  getOption2 = () => {
    let option = {
      title: {
        text: '用户骑行订单',
      },
      legend: {
        data: ['ofo', '摩拜', '小蓝'],
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'ofo',
          type: 'bar',
          data: [500, 300, 230, 900, 1000, 2000, 400],
        },
        {
          name: '摩拜',
          type: 'bar',
          data: [300, 500, 230, 400, 1000, 4000, 3200],
        },
        {
          name: '小蓝',
          type: 'bar',
          data: [550, 2300, 2310, 1900, 3000, 12000, 440],
        },
      ],
    };
    return option;
  };
  render() {
    const style = {
      width: 'calc(85vw)',
    };

    return (
      <div style={style}>
        <Card title="饼形图1">
          <ReactEcharts option={this.getOption()} style={{ height: '500px', width: '100%' }} />
        </Card>
        <Card title="饼形图2">
          <ReactEcharts option={this.getOption2()} style={{ height: '500px', width: '100%' }} />
        </Card>
      </div>
    );
  }
}
