import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
    </BrowserRouter>
);

export default Routes