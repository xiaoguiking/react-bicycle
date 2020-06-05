import React, { Component } from 'react';
import MenuConfig from '../../config/menuConfig';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import MenuItem from 'antd/lib/menu/MenuItem';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './index.less';

const { SubMenu } = Menu;

function handleClick(e) {
  console.log('click', e);
}

export default class extends Component {
  // 菜单渲染
  renderNavNode2 = (MenuConfig) => {
    console.log(MenuConfig, '123');
    return MenuConfig.reduce((pre, item) => {
      //添加Menu.item
      if (!item.children) {
        pre.push(
          <MenuItem key={item.key}>
            {/* <Link to={item.key}> */}
            {/* <Icon type={item.icon} /> */}
            <span>{item.title}</span>
            {/* </Link> */}
          </MenuItem>,
        );
      } else {
        //添加SubMenu
        pre.push(
          <SubMenu
            key={item.key}
            title={
              <span>
                {/* <Icon type={item.icon} /> */}
                <span>{item.title}</span>
              </span>
            }
          >
            {this.renderNavNode2(item.children)}
          </SubMenu>,
        );
      }
      return pre;
    }, []);
  };

  // componentDidMount() {
  //   const menuTreeNode = this.renderNavNode2(MenuConfig);
  //   this.setState({
  //     menuTreeNode,
  //   });
  // }
  componentWillMount() {
    const menuTreeNode = this.renderNavNode2(MenuConfig);
    this.setState({
      menuTreeNode,
    });
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="logo" />
          <h1>logo</h1>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {this.state.menuTreeNode}
          {/* <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item> */}
        </Menu>
      </div>
    );
  }
}
