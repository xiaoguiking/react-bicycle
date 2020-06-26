// 路由
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './pages/login/Login';
// import NotFound from './pages/Login/NotFound';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Home from './pages/Home';
import FormLogin from './pages/form/login';
import FormReg from './pages/form/reg';
import NotMatch from './pages/notMatch';
import BasicTable from './pages/table/basicTable';
import highTable from './pages/table/highTable';
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Message from './pages/ui/messages';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousels from './pages/ui/carousels';
import City from './pages/city';
import Order from './pages/order';

import OrderDetail from './pages/order/detail';

// 通用详情布局
import Common from './common';

export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            {/*<Route path="/" component={Admin} />*/}
            <Route path="/login" component={Login} />
            <Route
              path="/common"
              render={() => (
                <Common>
                  <Route path="/order/detail/:orderId" component={OrderDetail} />
                </Common>
              )}
            />
            <Route
              path="/"
              render={() => (
                <Admin>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/admin/home" component={Home} />
                    <Route exact path="/admin/ui/buttons" component={Buttons} />
                    <Route path="/admin/ui/modals" component={Modals} />
                    <Route path="/admin/ui/loadings" component={Loadings} />
                    <Route path="/admin/ui/notification" component={Notice} />
                    <Route path="/admin/ui/messages" component={Message} />
                    <Route path="/admin/ui/tabs" component={Tabs} />
                    <Route path="/admin/ui/gallery" component={Gallery} />
                    <Route path="/admin/ui/carousel" component={Carousels} />
                    <Route path="/admin/form/login" component={FormLogin} />
                    <Route path="/admin/form/reg" component={FormReg} />
                    <Route path="/admin/table/basic" component={BasicTable} />
                    <Route path="/admin/table/high" component={highTable} />
                    <Route path="/admin/table/high" component={highTable} />
                    <Route path="/admin/city" component={City} />
                    <Route path="/admin/order" component={Order} />
                    <Route component={NotMatch} />
                    <Redirect exact from="/#/" to="/#/admin/home" />
                  </Switch>
                </Admin>
              )}
            />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

// <Route path="" component={NotFound} />
// 不加switch， 所有都会匹配， 比如主页，然后404
