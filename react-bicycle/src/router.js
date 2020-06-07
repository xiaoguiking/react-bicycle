// 路由
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './pages/Login/Login';
// import NotFound from './pages/Login/NotFound';
import Buttons from './pages/ui/buttons';
import Home from './pages/Home';

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
