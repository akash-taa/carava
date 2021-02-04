import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter, MemoryRouter, Route, Switch } from "react-router-dom";
import DashboardHome from './MainDashboard';
// import Home from './components/Home/Home';
// import Personalization } from './components/personalization';
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/dashboard" component={DashboardHome} />
            {/* <Route exact path="/home" component={Home} /> */}
        </Switch>
    )

}

export default Routes;