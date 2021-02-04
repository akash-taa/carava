import React from "react";
import 'antd/dist/antd.css';
import './App.css';
import MainView from './components/Mainview';
import Sidebar from './components/Sidebar/Sidebar'
import MainDashboard from "./components/MainDashboard";
import Login from "./components/Login/Login";
import { Layout, Menu, Breadcrumb } from 'antd';
import NavNotification from './components/NavNotification';
import NavProfile from './components/NavProfile';
import { Input, Space } from 'antd';
const { Search } = Input;
const { Header, Sider, Content } = Layout;

function App() {
  const menuItems = [
      { name: "Dashboard", to: "/dashboard", icon: 'fas fa-home' },
      { name: "Meeting", to: "/dashboard/meeting", icon: 'fas fa-clock' },
      { name: "Feedback", to: "/dashboard/feedback", icon: 'fas fa-heart' },
      { name: "Analytics", to: "/dashboard/analytics", icon: 'fas fa-user' },
      { name: "Settings", to: "/dashboard/setting", icon: 'fas fa-cog' },
  ]
   
    return (
     
       <Layout style={{ minHeight: '100vh' }}>

       <Sidebar menuItems={menuItems} />
       <Layout className="site-layout">
         <Header className="carava-header" style={{ padding: 0 }}>
         <div className="nav-left">
           {/* <img src={require('../assets/images/logo.png').default} /> */}
         </div>
         <div className="nav-right">
          <Search placeholder="input search text" style={{ width: 200 }} />
          <NavNotification/>
          <NavProfile />
          </div>
         </Header>
 
         <MainView />
         
       </Layout>
     </Layout>
    );
  
}

export default App;