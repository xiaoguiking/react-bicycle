import React, { Component } from "react";
import MenuConfig from "../../config/menuConfig";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import MenuItem from "antd/lib/menu/MenuItem";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

function handleClick(e) {
  console.log("click", e);
}

const getNavNode2 = (MenuConfig) => {
  return MenuConfig.reduce((pre, item) => {
    //添加Menu.item
    if (!item.children) {
      pre.push(
        <MenuItem key={item.key}>
          <Link to={item.key}>
            {/* <Icon type={item.icon} /> */}
            <span>{item.title}</span>
          </Link>
        </MenuItem>
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
          {getNavNode2(item.children)}
        </SubMenu>
      );
    }
    return pre;
  }, []);
};

export default class extends Component {
  render() {
    // const style = {
    //   backgroundColor: "red",
    // };
    return (
      <div>
        <div className="logo">
          logo
          <img src="" alt="logo" />
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {getNavNode2(MenuConfig)}
        </Menu>
      </div>
    );
  }
}
