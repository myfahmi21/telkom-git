import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Search from './components/Search';
import User from './components/User';

const routes = (
  <Router history={browserHistory}>
      <div>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route path="user/:username" component={User}/>
        </Route>
      </div>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));