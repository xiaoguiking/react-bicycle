import React from 'react';
import { Link, HashRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Dashboard from './Dashboard';
import Main from './Main';

export default () => {
  return (
    <HashRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about/:id">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/dashboard" component={Dashboard} />
          <Route exact={true} path="/about/:id" component={About} />
        </Switch>
      </div>
    </HashRouter>
  );
};
