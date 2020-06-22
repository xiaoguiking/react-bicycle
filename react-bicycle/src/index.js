import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Globalrouter from './Globalrouter';
// import * as serviceWorker from './serviceWorker';
// import Home from './pages/router_demo/Home';  路由学习1
// import IRouter from './pages/router2/router'; // 路由学习2
// import Admin from './admin'; //显示admin


import { Provider } from 'react-redux';
import configStore from './redux/store';
import IRouter from './router'; // 路由控制显示
const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <IRouter />
  </Provider>,
  document.getElementById('root'),
);
