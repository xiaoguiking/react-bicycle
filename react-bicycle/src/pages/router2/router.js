import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from '../router_demo/About';
import Dashboard from '../router_demo/Dashboard';
// import Main from '../router_demo/Main';
import { Main } from './Main';
import Info from './Info';

export default () => {
  return (
    <Router>
      <Home>
        <Route exact path="/" component={Main} />
        <Route
          path="/main"
          render={() => (
            <Main>
              <Route e path="/main/:id" component={Info} />
            </Main>
          )}
        />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/dashboard" component={Dashboard} />
        <Route exact={true} path="/about/:id" component={About} />
      </Home>
    </Router>
  );
};
