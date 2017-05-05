/**
 * index.js for render
 * 直出和同构探索
 */

'use strict'

import {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Home from './views/home.js'

render( <Home />, document.getElementById('root'));
