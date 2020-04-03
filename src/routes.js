import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import About from './pages/About'

const Routes = () => (
    <HashRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/login" component={Login}/>
		<Route path="/about/:about" component={About}/>
    </HashRouter>
);

export default Routes