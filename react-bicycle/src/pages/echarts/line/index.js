import React from 'react';
import { Card } from 'antd';
// 全部加载
// import echarts from 'echarts';
// 按需加载
// import echartTheme
// import echarts from 'echarts/lib/echarts';
// 导入饼形图
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/title';
import ReactEcharts from 'echarts-for-react';

/**
 * 折线图
 */
export default class Line extends React.Component {
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
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 1932, 3901, 934, 1290, 11330, 1320],
          type: 'line',
          lineStyle: {
            color: 'blue',
          },
        },
      ],
    };
    return option;
  };

  getOption2 = () => {
    let option = {
      title: {
        text: '用户骑行订单',
      },
      legend: {
        data: ['ofo订单量', '摩拜订单量'],
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a}<br />{b}:{c}',
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'ofo订单量',
          data: [120, 1932, 3901, 934, 1290, 11330, 1320],
          type: 'line',
          lineStyle: {
            color: 'blue',
          },
        },
        {
          name: '摩拜订单量',
          data: [220, 3932, 1901, 12934, 21290, 1130, 5320],
          type: 'line',
          lineStyle: {
            color: 'green',
          },
        },
      ],
    };
    return option;
  };

  getOption3 = () => {
    let option = {
      title: {
        text: '用户骑行订单',
      },
      legend: {
        data: ['ofo订单量', '摩拜订单量'],
      },
      xAxis: {
        type: 'category',
        // 是否从0开始
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a}<br />{b}:{c}',
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'ofo订单量',
          data: [120, 1932, 3901, 934, 1290, 11330, 1320],
          type: 'line',
          areaStyle: {},
          lineStyle: {
            color: 'blue',
          },
        },
        {
          name: '摩拜订单量',
          data: [220, 3932, 1901, 12934, 21290, 1130, 5320],
          type: 'line',
          // 加入面积效果
          areaStyle: {},
          lineStyle: {
            color: 'green',
          },
        },
      ],
    };
    return option;
  };

  render() {
    const style = {
      width: 'calc(85vw)',
      backgroundColor: 'gray',
    };

    return (
      <div style={style}>
        <Card title="折线图1">
          <ReactEcharts option={this.getOption()} style={{ height: '400px', width: '100%' }} />
        </Card>
        <Card title="折线图2">
          <ReactEcharts option={this.getOption2()} style={{ height: '400px', width: '100%' }} />
        </Card>
        <Card title="折线图3">
          <ReactEcharts option={this.getOption3()} style={{ height: '400px', width: '100%' }} />
        </Card>
      </div>
    );
  }
}
