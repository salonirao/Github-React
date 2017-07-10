
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App.js';
import Search from './components/Search.js';
import User from './components/User.js';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route path="user/:username" component={User}/>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
