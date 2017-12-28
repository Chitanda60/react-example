/**
 * index.js for template
 */

'use strict'

import { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Home from './modules/home'
import Template from './modules/template'
import AnimationView from './modules/animationView'
import UpdateView from './modules/updateView'
import AsyncView from './modules/asyncView'
import DecoratorView from './modules/decoratorView'
import ContextView from './modules/contextView'
import CanvasView from './modules/canvasView'
import FlowtypeView from './modules/flowtypeView'
import FetchView from './modules/fetchView'

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Home} />
                <Route path="/template" component={Template} />
                <Route path="/animation" component={AnimationView} />
                <Route path="/update" component={UpdateView} />
                <Route path="/async" component={AsyncView} />
                <Route path="/decorator" component={DecoratorView} />
                <Route path="/context" component={ContextView} />
                <Route path="/canvas" component={CanvasView} />
                <Route path="/flowtype" component={FlowtypeView} />
                <Route path="/fetch" component={FetchView} />
            </Router>
        )
    }
}

const dom = document.getElementById('app')
if ( dom ) {
    ReactDOM.render( <App />, dom )
}