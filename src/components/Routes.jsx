import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter, MemoryRouter, Route, Switch } from "react-router-dom";
import DashboardHome from './MainDashboard';
import Login from './Login/Login';
// import Home from './components/Home/Home';
// import Personalization } from './components/personalization';
const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/dashboard" component={DashboardHome} />
            <Route exact path="/signup" component={Login} />
        </Switch>
        </BrowserRouter>
    )

}

export default Routes;