/**
 * Created by kernel-72 on 08.05.17.
 */

import React from 'react';
import Home from './pages/Home'
import Page1 from './pages/Page1'

import {
    Switch,
    Route
} from "react-router-dom"

const App = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/page1" component={Page1}/>
    </Switch>
);

export default App;

