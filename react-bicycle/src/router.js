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

export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            {/*<Route path="/" component={Admin} />*/}
            <Route path="/login" component={Login} />
            <Route
              path="/"
              render={() => (
                <Admin>
                  <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/ui/buttons" component={Buttons} />
                    <Route path="/ui/modals" component={Modals} />
                    <Route path="/ui/loadings" component={Loadings} />
                    <Route path="/ui/notification" component={Notice} />
                    <Route path="/ui/messages" component={Message} />
                    <Route path="/ui/tabs" component={Tabs} />
                    <Route path="/ui/gallery" component={Gallery} />
                    <Route path="/ui/carousel" component={Carousels} />
                    <Route path="/form/login" component={FormLogin} />
                    <Route path="/form/reg" component={FormReg} />
                    <Route path="/table/basic" component={BasicTable} />
                    <Route path="/table/high" component={highTable} />
                    <Route path="/table/high" component={highTable} />
                    <Route path="/city" component={City} />
                    <Redirect to="/home" />
                    <Route component={NotMatch} />
                  </Switch>
                </Admin>
              )}
            />
            <Route path="/admin" component={Admin} />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

// <Route path="" component={NotFound} />
// 不加switch， 所有都会匹配， 比如主页，然后404
