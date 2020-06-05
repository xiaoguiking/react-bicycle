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

### 02 react 虚拟 dom 是怎么回事

虚拟 dom 是真实 dom 在内存中的表示
虚拟 dom 是 js 和真实 dom 之间加入一个缓存，利用 diff 算法避免没有必要的操作

- 用 js 对象结构表示 dom 树的结构，然后利用这个树构建一个真正的 dom 树，插入到文档中
- 当状态变更的时候，重新构建一个新的对象树，然后新旧树对比，记录差异
- 把记录到的差异应用到真正的 dom 树，视图更新
- 把树形结构按照层级分解，比较同级元素

优点： 保证性能下限，虚拟 dom 经过 diff 找出最小差异，然后批量 patch，无需手动操作 dom，虚拟 dom 的 diff 和 path 都是一次更新中自动进行，

### 03.react-router 原理

window.history

### 04 生命周期

react 16 之后有三个生命周期被废弃 （没有被删除）
componentWillMount
componentWillReceiveProps
componentWillUpdate

官方计划在 17 版本中完全删除，只保留 UNSAVE\_前缀，目的为了向下兼容

react 16.8 挂载阶段 更新阶段 卸载阶段

**挂载阶段**

- constructor 构造函数，最先被执行，通常在构造函数里面初始化 state,或者给自定义的方法绑定 this
- getDerivedStateFromProps 当我们接受到新的属性想去修改 state 的时候，可是使用它
- render 纯函数，返回原生的 dom，react 组件，Fragment，字符串和数字 布尔
- componentDidMount 组件挂载调用，此时可以获取到 dom 节点，比如发送数据请求

**更新阶段**

- getDeverivedFromProps， 挂载阶段和更新阶段都可能调用
- shouldComponentUpdate（nextProps, nextState）表示新的属性和变化之后的 state，返回一个布尔值，true 表示重新渲染，false 表示不会重新渲染，默认返回 true，优化性能

- render 更新阶段触发生命周期
- ComponentDidUpdate（prevProps, prevState）表示之前使用的 props，之前的 state，如果触发某些回调函数需要用到 DOM 元素的状态，然后在更新中同一触发回调或者更新状态

**卸载阶段**

ComponentWillUnmount 卸载生命周期，去除定时器，取消网络请求，清理无效的 dom 操作

### 05 setState 异步还是同步

> setState 生命周期中异步， 原生时间中同步

- setState 只在合成事件和钩子函数中是异步，在原生事件和 setTimeout 都是同步的
- “异步”并不是说内部代码由异步代码实现，其实本身的执行过程是同步的，只是合成事件和钩子函数的调用顺序在更新之前
  导致在合成事件和钩子函数中没法立即拿到更新后的值，形成了所谓的“异步”，可以通过第二个参数，setState（partialState，callback）拿到更新后的结果
- setState 的批量更新优化是建立在“异步”（合成事件、钩子函数之上），在原生事件和 setTimeout 不会批量更新，在“异步”中如果对同一个值进行多次 setState，setState 批量更新会对其进行覆盖，取最后一次的执行，如果是同事 setState 多个不同的值，在更新时会对其合并批量更新

### 06 redux 全局状态管理

数据管理中心，相当于一个全局的 data store 实例

- store 保存数据地方，整个应用只有一个 store
- state store 对象包含所有的数据，如果想要得到某个时点的数据，就要对 store 生成快照，数据集合
- action action 是 view 发出通知，表示 state 要变化
- action creator view 要发送多少种消息，必须给出一个新的 state， 函数就叫 action creator
- reducer store 收到 action 必须给出一个新的 state， view 才变化，过程叫做 reducer，reducer 是一个函数，接受 action 和当前的 state 作为参数，返回一个新的 state
- dispatch 是 view 发出 action 的方法

**工作流程**

- 用户通过 view， 发出 action 调用 dispatch 方法
- 然后 store 自动调用 reducer 方法，传入两个参数，当前的 state 和 action，reducer 返回一个新的 state
- state 一旦有变化，store 就会监听函数，更新 view
