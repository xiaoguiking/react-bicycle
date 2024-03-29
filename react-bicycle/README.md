## 项目分支

- master 主分支
- dev-Form 表单分支 done
- dev—List 列表分支 done
- dev-modal 模态框分支
- dev-city 城市管理 done (bug)
- dev-order 订单管理
- dev-engineer 工程化

## 命令

- 切换创建分支 git checkout -b dev
- 合并分支

  - 切换到 master 分支 git checkout master
  - 合并指定分支： gie merge dev

- 合并分支遇到冲突解决

### 记录合并 dev-city

- git merge dev-city
- 合并过程出现冲突 git status， 解决冲突
- git commit -am "dev-city 合并 master 冲突解决"
- git push origin master

### 记录合并 dev-order 表单 radio

- git merge dev-order
- 合并过程出现冲突 git status， 解决冲突
- git commit -am "dev-order 合并 master 冲突解决"
- git push origin master

### dev-order 获取 master 最新代码

- dev-order git merge master

## 项目整体学习架构

- 创建一个项目 create-react-app react-bicycle
- 打包 yarn build
- 文件目录结构 pages componnts common utils style config
- 预处理语言 npm install less less-loader config webpack.config.js 所有的 sass 改成 less less@2.7.3 降级处理 回退版本

- antd npm install antd 全局加载 包过大 x 按需加载 npm install babel-plugin-import config webpack.config.js 找 babel-loader 有一个 plugins ["import", { "libraryName": "antd", style: true }] less 版本 回退 2.7.3
- 路由
- 写界面跟组件 login reg admin admin/list admin/food admin/user

* 封装 axios
* 代理
* 全局状态管理 react-redux immutable
* 上线
* nust.js next.js ssr 框架

### 项目整体插件记录

- create-react-app 脚手架建立
- 安装 less yarn add less less-loader 解决问题版本回退 yarn add less@2.7.3
- 安装 antd yarn add antd
- 文件按需加载 yarn add babel-plugin-import
- 安装路由 yarn add react-router-dom
- 安装请求 axios yarn add axios

### 问题记录

1. 解开 yarn eject 报错

- 首先应该在 create-react-app 成功后， 直接 yarn eject
- 提示 git， 按照提示先提交上传
- yarn eject 解开完毕

2. 引入 less 样式 ?(脚手架默认是 sass,改用 less)

- 首先解开包管理文件 通过`yarn eject` 解开文件， 会有 config 文件加入
- 引入 less yarn add less less-loader
- 打开 webpack.config.js 将所有 sass 替换成 less
- 改完 yarn start 重新启动 查看效果

3.  为了防止 less 变量名污染全局

- 通过 bem 的方式命名 admin-container-dom

### 项目整体页面结构

src/components

- src
- components
  - Footer
    - index.js
    - index.css
  - Header
    - index.js
    - index.css
  - NavLeft
    - index.js
    - index.css
- admin.js
- style -common.less
- axios

### 项目工程化 Table 动态渲染

- Mock 数据
- Axios 封装
- Loading 处理 错误拦截

### 路由使用 react-router-dom 4.x

- HashRouter BrowserRouter
- Route: path exact component render
- NavLink Link

路由传值取参数 `<Route path="/admin/:id" 取值：this.props.match.params.id`

### redux

- 单向数据流 从父流向子，兄弟组件无法共享
- State： react 中的状态 是只读对象，不可更改
- Reducer 基本函数， 用于对 State 的业务逻辑处理，传入 state 和 action， 返回一个新的 state
- Action 普通对象，用于描述事件行为，改变 State

### redux 集成项目(面包屑)

- 创建 Action 模块
- 创建 Reducer 模块
- 创建 Store 模块
- 通过 connect 方法将 react 组件和 redux 连接起来
- 添加 Provider 作为项目的根组件进行包裹，用于对数据的存储

* 侧边菜单选中功能


### 同步更新package.json