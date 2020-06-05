
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## 项目整体学习架构


* 创建一个项目 create-react-app antddemo
* 打包  yarn build
* 文件目录结构
  pages
  componnts
  common
    utils
    style
  config
* 预处理语言
  npm  install  less less-loader
  config webpack.config.js 所有的sass改成less
  less@2.7.3  降级处理   回退版本 

* antd
  npm  install antd
  全局加载  包过大 x
  按需加载
  npm install babel-plugin-import
   config webpack.config.js   找 babel-loader 有一个plugins
    ["import", { "libraryName": "antd", style: true }]
  less 版本 回退2.7.3
* 路由
* 写界面
      跟组件
  login  reg   admin
          admin/list admin/food admin/user


* 封装axios
* 代理
* 全局状态管理 react-reudx  immutable  
* 上线
* nust.js  next.js ssr 框架

### 项目整体插件记录

- create-react-app  脚手架建立
- 安装less  yarn add less less-loader   解决问题版本回退 yarn add less@2.7.3
- 安装antd yarn add  antd
- 文件按需加载  yarn add babel-plugin-import
- 安装路由  yarn add react-router-dom
- 安装请求axios  yarn add axios



###   问题记录

1. 解开yarn eject 报错

- 首先应该在create-react-app 成功后， 直接yarn eject
- 提示git， 按照提示先提交上传
- yarn eject 解开完毕


2. 引入less 样式 ?(脚手架默认是sass,改用less)
- 首先解开包管理文件  通过`yarn eject` 解开文件， 会有config文件加入
- 引入less    yarn add less  less-loader
- 打开webpack.config.js  将所有sass 替换成less
- 改完 yarn start 重新启动 查看效果

3.  为了防止 less 变量名污染全局 

- 通过bem 的方式命名     admin-cotainer-dom