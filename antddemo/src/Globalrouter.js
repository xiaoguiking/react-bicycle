import React, { Fragment } from 'react';
import './index.less';
//  路由界面
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import Admin from './pages//Admin/Admin';
import Login from './pages/Login/Login';
import NotFound from './pages/Login/NotFound';

function GlobalRouter() {
  return (
    <Fragment>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path='/' component={Admin}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='*' component={NotFound}></Route>
            <Redirect from='/' to='/admin' ></Redirect> 
          </Switch>
        </App>
      </BrowserRouter>
    </Fragment>
  );
}

export default GlobalRouter;
