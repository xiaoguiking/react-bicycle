import React from 'react';
import { Card } from 'antd';
// 全部加载
// import echarts from 'echarts';
// 按需加载
// import echartTheme
// import echarts from 'echarts/lib/echarts';
// 导入饼形图
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/title';
import ReactEcharts from 'echarts-for-react';

/**
 * 饼形图
 */
export default class Pie extends React.Component {
  // 配置主题
  componentWillMount() {
    // echarts.registerTheme();
  }

  // 配置option
  getOption = () => {
    let option = {
      title: {
        text: '用户骑行订单',
        subtext: '纯属虚构',
        left: 'center',
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a}<br />{b}:{c}({d}%)',
      },
      series: [
        {
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 1000, name: '星期一' },
            { value: 2000, name: '星期二' },
            { value: 3000, name: '星期三' },
            { value: 2000, name: '星期四' },
            { value: 5000, name: '星期五' },
            { value: 7000, name: '星期六' },
            { value: 13000, name: '星期日' },
          ],
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
        subtext: '纯属虚构',
        left: 'center',
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a}<br />{b}:{c}({d}%)',
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '70%'],
          data: [
            { value: 1000, name: '星期一' },
            { value: 2000, name: '星期二' },
            { value: 3000, name: '星期三' },
            { value: 2000, name: '星期四' },
            { value: 5000, name: '星期五' },
            { value: 7000, name: '星期六' },
            { value: 13000, name: '星期日' },
          ],
        },
      ],
    };
    return option;
  };
  // 配置option
  getOption3 = () => {
    let option = {
      title: {
        text: '用户骑行订单',
        subtext: '纯属虚构',
        left: 'center',
      },

      legend: {
        left: 'right',
        bottom: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8'],
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a}<br />{b}:{c}({d}%)',
      },
      series: [
        {
          type: 'pie',
          // radius: [20, 110],
          // center: ['50%', '50%'],
          //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
          roseType: 'radius',
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { value: 10, name: 'rose1' },
            { value: 5, name: 'rose2' },
            { value: 15, name: 'rose3' },
            { value: 25, name: 'rose4' },
            { value: 20, name: 'rose5' },
            { value: 35, name: 'rose6' },
            { value: 30, name: 'rose7' },
            { value: 40, name: 'rose8' },
          ].sort((a, b) => {
            return a.value - b.value;
          }),
        },
      ],
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      },
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
        <Card title="柱形图1">
          <ReactEcharts option={this.getOption()} style={{ height: '400px', width: '100%' }} />
        </Card>
        <Card title="柱形图2">
          <ReactEcharts option={this.getOption2()} style={{ height: '400px', width: '100%' }} />
        </Card>
        <Card title="柱形图3">
          <ReactEcharts option={this.getOption3()} style={{ height: '400px', width: '100%' }} />
        </Card>
      </div>
    );
  }
}
