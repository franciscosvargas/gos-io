import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';



const Routes = () => (
    <HashRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/login" component={Login}/>
    </HashRouter>
);

export default Routes