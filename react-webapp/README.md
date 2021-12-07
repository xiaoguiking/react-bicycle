# react-admin 后台初始模板


alias: {
      'react-native': 'react-native-web',
      components: path.resolve(__dirname, '..') + '/src/common/components',
      container: path.resolve(__dirname, '..') + '/src/common/container',
      images: path.resolve(__dirname, '..') + '/src/common/images',
      pages: path.resolve(__dirname, '..') + '/src/common/pages',
      utils: path.resolve(__dirname, '..') + '/src/common/utils',
      data: path.resolve(__dirname, '..') + '/src/server/data',
      actions: path.resolve(__dirname, '..') + '/src/common/actions',
      reducers: path.resolve(__dirname, '..') + '/src/common/reducers',
    },


### 项目规范

- 1.文件夹、文件名称统一小写、多个单词以连接符（-）连接；
- 2.JavaScript变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；
- 3.所有的函数式组件，为了避免不必要的渲染，全部使用memo进行包裹；


### 项目配置

- 配置  src/setupProxy.js
```
const proxy = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }

```


### 路由管理  react-router-config






