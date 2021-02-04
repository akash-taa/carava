import React from "react";
import 'antd/dist/antd.css';
import './App.css';
import MainView from './components/Mainview';
import Sidebar from './components/Sidebar/Sidebar'
import MainDashboard from "./components/MainDashboard";
import Login from "./components/Login/Login";

class App extends React.Component {


  render() {
   
    return (
      <>
      {/* <MainDashboard/> */}
      <Login/>
      </>
    );
  }
}

export default App;