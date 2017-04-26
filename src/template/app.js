/**
 * index.js for template
 */

'use strict'

import { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Home from './modules/home';
import Template from './modules/template';
import Animation from './modules/animation';
import Update from './modules/update';
import Async from './modules/async';
import Decorator from './modules/decorator';

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Home} />
                <Route path="/template" component={Template} />
                <Route path="/animation" component={Animation} />
                <Route path="/update" component={Update} />
                <Route path="/async" component={Async} />
                <Route path="/decorator" component={Decorator} />
            </Router>
        )
    }
}

const dom = document.getElementById('app');
if ( dom ) {
    ReactDOM.render( <App />, dom );
    console.log('Hello DUI ~ version: 0.1');
}
