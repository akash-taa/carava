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
 
    );
  }
}

export default MainDashboard;