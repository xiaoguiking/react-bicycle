/**
 * Tabs 标签页 5-9 
 */
import React from 'react';
import { Card, message, Tabs, Button } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const TabToggle = () => {
  const style = {
    width: 'calc(85vw)',
  };
  const handleChange = (key) => {
    message.success(`你选择了标签页${key}`);
  };

  return (
    <div style={style}>
      <Card title="Tab标签页">
        <Tabs defaultActiveKey="1" type="line" onChange={handleChange}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2" disabled>
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Card>
      <Card title="Tab标签页图">
        <Tabs defaultActiveKey="1" type="line" onChange={handleChange}>
          <TabPane
            tab={
              <span>
                <PlusOutlined />
                Tab1
              </span>
            }
            key="1"
          >
            React of Tab Pane 1
          </TabPane>
          <TabPane
            tab={
              <span>
                <EditOutlined />
                Tab2
              </span>
            }
            key="2"
          >
            Vue of Tab Pane 2
          </TabPane>
          <TabPane
            tab={
              <span>
                <DeleteOutlined />
                Tab3
              </span>
            }
            key="3"
          >
            angular of Tab Pane 3
          </TabPane>
        </Tabs>
      </Card>
      <Card title="动态添加页签">
        <ActiveTab />
      </Card>
    </div>
  );
};

export default TabToggle;

class ActiveTab extends React.Component {
  constructor(props) {
    super(props);
    const panes = [
      {
        title: 'tab1',
        content: 'tab1',
        key: 1,
      },
      {
        title: 'tab2',
        content: 'tab2',
        key: 2,
      },
      {
        title: 'tab3',
        content: 'tab3',
        key: 3,
      },
      {
        title: 'tab4',
        content: 'tab4',
        key: 4,
      },
    ];

    this.newTabIndex = 0;
    this.state = {
      activeKey: panes[0].key, // 设置当前激活的key
      panes,
    };
  }
  onChange = (activeKey) => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };
  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = (targetKey) => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter((pane) => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render() {
    const { panes, activeKey } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button onClick={this.add}>ADD</Button>
        </div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {panes.map((pane) => {
            return (
              <TabPane tab={pane.title} key={pane.key}>
                {pane.content}
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    );
  }
}
