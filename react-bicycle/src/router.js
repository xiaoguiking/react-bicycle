// 路由
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './pages/login/Login';
// import NotFound from './pages/Login/NotFound';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Home from './pages/Home';
import NotMatch from './pages/notMatch';
import BasicTable from './pages/table/basicTable';

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
                    <Route path="/home" component={Home} />
                    <Route path="/ui/buttons" component={Buttons} />
                    <Route path="/ui/modals" component={Modals} />
                    <Route path="/table/basic" component={BasicTable} />
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
