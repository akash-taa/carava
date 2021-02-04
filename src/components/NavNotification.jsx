import React, { useState } from 'react';
import { Menu, Dropdown, Badge, Avatar, List, Button } from 'antd';
import { 
  MailOutlined, 
  BellOutlined, 
  WarningOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';


const getIcon =  icon => {
  switch (icon) {
    case 'mail':
      return <MailOutlined />;
    case 'alert':
      return <WarningOutlined />;
    case 'check':
      return <CheckCircleOutlined />
    default:
      return <MailOutlined />;
  }
}

const getNotificationBody = list => {
  return list.length > 0 ?
  <List
    size="small"
    itemLayout="horizontal"
    dataSource={list}
    renderItem={item => (
      <List.Item className="list-clickable">
       
          <div className="pr-3">
            {item.img? <Avatar src={`/img/avatars/${item.img}`} /> : <Avatar className={`ant-avatar-${item.type}`} icon={getIcon(item.icon)} />}
          </div>
          <div className="mr-3">
            <span className="font-weight-bold text-dark">{item.name} </span>
            <span className="text-gray-light">{item.desc}</span>
          </div>
          <small className="ml-auto">{item.time}</small>
        
      </List.Item>
    )}
  />
  :
  <div className="empty-notification">
    <img src="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg" alt="empty" />
    <p className="mt-3">You have viewed all notifications</p>
  </div>;
}

export const NavNotification = () => {


  const notificationList = (
    <div className="nav-dropdown nav-notification">
      <div className="nav-notification-header d-flex justify-content-between align-items-center">
        <h4 className="mb-0">Notification</h4>
        <Button type="link"  size="small">Clear </Button>
      </div>
      <div className="nav-notification-body">
        =
      </div>
      
        <div className="nav-notification-footer">
          <a className="d-block" href="#/">View all</a>
        </div>
     
    </div>
  );

  return (
    <Dropdown 
      placement="bottomRight"
      overlay={notificationList}
    
      trigger={['click']}
    >
      <Menu mode="horizontal">
        <Menu.Item>
          <Badge count={1}>
          <BellOutlined className="nav-icon mx-auto" type="bell" />
          </Badge>
        </Menu.Item>
      </Menu>
   </Dropdown>
  )
}


export default NavNotification;
