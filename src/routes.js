import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact'

const Routes = () => (
    <HashRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
    </HashRouter>
);

export default Routes