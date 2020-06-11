import React, { Component } from 'react';
import MenuConfig from '../../config/menuConfig';
import { Menu } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import { Link, NavLink } from 'react-router-dom';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './index.less';

const { SubMenu } = Menu;

export default class extends Component {
  // 菜单渲染  reduce
  renderNavNode2 = (MenuConfig) => {
    return MenuConfig.reduce((pre, item) => {
      //添加Menu.item
      if (!item.children) {
        pre.push(
          <MenuItem key={item.key}>
            <Link to={item.key}>
              {/* <Icon type={item.icon} /> */}
              <span>{item.title}</span>
            </Link>
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

  //  菜单渲染 递归
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={item.title}>
            {this.renderMenu(MenuConfig)}
          </SubMenu>
        );
      }
      return (
        <MenuItem key={item.key} title={item.title}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </MenuItem>
      );
    });
  };
  // componentDidMount() {
  //   const menuTreeNode = this.renderNavNode2(MenuConfig);
  //   this.setState({
  //     menuTreeNode,
  //   });
  // }
  componentWillMount() {
    // const menuTreeNode = this.renderNavNode2(MenuConfig); reduce
    const menuTreeNode = this.renderNavNode2(MenuConfig); //递归
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
        </Menu>
      </div>
    );
  }
}
