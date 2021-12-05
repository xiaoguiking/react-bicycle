import React, { Component } from 'react';
import MenuConfig from '../../config/menuConfig';
import { Menu } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'; // 引入连接器
import { switchMenu } from './../../redux/action';
import './index.less';

const { SubMenu } = Menu;
/**
 *  NavLeft
 * 使用redux触发面包屑
 */
class NavLeft extends Component {
  state = {
    currentKey: '',
  };
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
  //菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      //如果item有子元素,遍历自己,再次调用,直到子节点加载完毕
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };

  // componentDidMount() {
  //   const menuTreeNode = this.renderNavNode2(MenuConfig);
  //   this.setState({
  //     menuTreeNode,
  //   });
  // }

  handleClick = ({ item, key }) => {
    console.log(item.props, 'item');
    const { dispatch } = this.props;
    dispatch(switchMenu(item.props.title));
    this.setState({
      currentKey: key,
    });
  };

  componentWillMount() {
    let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
    // const menuTreeNode = this.renderNavNode2(MenuConfig); reduce
    const menuTreeNode = this.renderMenu(MenuConfig); //递归
    this.setState({
      currentKey,
      menuTreeNode,
    });
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="logo" />
          <h1>react-admin</h1>
        </div>
        <Menu
          theme="dark"
          onClick={this.handleClick}
          defaultSelectedKeys={['1']}
          mode="inline"
          selectedKeys={this.state.currentKey}
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

// export default NavLeft;
export default connect()(NavLeft);
