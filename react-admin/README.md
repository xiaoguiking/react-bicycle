## react-webapp

## 移动端适配记录

- yarn add lib-flexible
- yarn add less@2.7.3 less-loader@^5.0.0
  ```
  需要yarn ejext 配置  react-admin/config/webpack.config.js
  ```
- yarn add postcss-px2rem

  ```
   需要yarn ejext 配置  react-admin/config/webpack.config.js

  const px2rem = require("postcss-px2rem")
  找到 postcss
  px2rem({remUnit: 75}),
  ```

### todo-webapp

- 模态框组件开发
  ```
  react 插槽功能  ----- vue slot
  ```
