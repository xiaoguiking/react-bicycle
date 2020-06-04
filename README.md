# react-bicycle

react 后台管理项目

## 框架总结

### 01 react 与 vue 区别

```
渲染用户界面，DOM操作效率低
尽量减少DOM操作，vue和react都是虚拟dom实现

相同点:
     1.都支持服务端渲染，seo优化，支持爬虫
     2.使用虚拟dom实现
     3.组件式开发
     4.框架的骨架，其他有生态构成比如说路由 状态管理
     5.数据驱动视图

不同点:
    1.react渲染式jsx，vue是template写模板
    2.性能： react机制触发整个组件重新渲染，大量的检查机制，提供许多有用的警告提示信息，
    vue提供优化的重新渲染，系统在渲染过程中跟踪依赖关系并且相应工作
    3.react针对mvc， Vue是mvvm模式
    4.虚拟dom，vue跟踪的是每一个组件的依赖关系，不需要重新渲染整个组件树
    5.react每当应用状态全部改变，都会重新渲染，需要使用shouldComponentUpdate 生命周期控制优化
    6.vue实现数据双向绑定，react数据流向单向
```
