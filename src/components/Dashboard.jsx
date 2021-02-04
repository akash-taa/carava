import React, { useEffect, useRef, useState } from "react";

// import './dashboard.css';
// import { MemoryRouter } from "react-router";

import Sidebar from "./Sidebar/Sidebar";
import MainView from "./Mainview/MainView";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';
function dashboard() {
  
    return (
        <div className="dashboarmain">
            <Sidebar />
            <MainView />

        </div>
    );
}
export default dashboard;