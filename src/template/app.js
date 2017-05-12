/**
 * index.js for template
 */

'use strict'

import { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Home from './modules/home';
import Template from './modules/template';
import AnimationView from './modules/animationView';
import UpdateView from './modules/updateView';
import AsyncView from './modules/asyncView';
import DecoratorView from './modules/decoratorView';
import ContextView from './modules/contextView';
import CanvasView from './modules/canvasView';

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
                <Route path="/contexts" component={Contexts} />
                <Route path="/canvass" component={Canvass} />
            </Router>
        )
    }
}

const dom = document.getElementById('app');
if ( dom ) {
    ReactDOM.render( <App />, dom );
    console.log('Hello DUI ~ version: 0.1');
}
