import React from 'react';
import {BrowserRouter,Route,Switch}  from 'react-router-dom';
import SignIn from './pages/SignIn'

import Home from './pages/Home';

const Routes = () => (
    <BrowserRouter>
        <Switch> 
            <Route path= "/" exact component = {Home}/>
            <Route path= "/signin" exact component = {SignIn}/>
            
        </Switch>
    </BrowserRouter>
)

export default Routes;