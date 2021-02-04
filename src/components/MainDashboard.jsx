import React from "react";
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import NavNotification from './NavNotification';
import NavProfile from './NavProfile';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeFilled
} from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const { Header, Sider, Content } = Layout;


class MainDashboard extends React.Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  
  render() {
   
    return (
      <Layout style={{ minHeight: '100vh' }}>

      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className="logo" />
        

       <div >{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: this.toggle,
          })}
          
          </div> 
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeFilled />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="carava-header" style={{ padding: 0 }}>
        <div className="nav-left">
          <img src={require('../assets/images/logo.png').default} />
        </div>
        <div className="nav-right">
         <Search placeholder="input search text" style={{ width: 200 }} />
         <NavNotification/>
         <NavProfile />
         </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
        here content
       
        </Content>
      </Layout>
    </Layout>
    );
  }
}

export default MainDashboard;