## 项目开发 后台管理系统

## 01 开发环境构建

yarn eject 解锁个性化配置

- 配置 less-loader

```css
webpack.config.js

yarn add less less-loader

替换config.js 全部scss改成less

yarn add babel-plugin-import

找到 loader: require.resolve("babel-loader"),
  // 按需加载antd
["import", { libraryName: "antd", style: true }],
```

> 报错 Module build failed (from ./node_modules/less-loader/dist/cjs.js):

```js
降级处理less版本 3.1 --- 2.7.1
yarn add less@^2.7.3
```