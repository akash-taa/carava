
import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { Space, Button } from 'antd';
import './Login.css';
import { Carousel } from 'antd';
import { useState } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Checkbox,
  AutoComplete,
} from 'antd';



class CreatepassForm extends React.Component {
    

    render ()
    {
        return (
            <>
            <div className="login-left-details">
                <img className="log-logo"
                  src={require("../../assets/images/logo.png").default}
                  />
                <h2 className="all-form-heading">Create New Password</h2>
                <p className="log-sign-form-desc">Don't have an account?<a>Sign Up</a></p>
                {/*create password form */}
                <Form
                className="all-form createpass-form"
                layout="vertical"
                >
                    <Form.Item
                    label="New Password"
                                name="password"
                                
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                ]}
                                hasFeedback
                    >
                   
                    <Input.Password placeholder="New Password"/>
                    </Form.Item>
                    <Form.Item
                    label="Confirm Password"
                                name="confirm password"
                                
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                ]}
                                hasFeedback
                    >
                   
                    <Input.Password placeholder=" Confirm Password"/>
                    </Form.Item>
                    <Form.Item>
                        <Button className="submit" type="primary" htmlType="submit">Reset</Button>
                    </Form.Item>
                </Form>
               
                {/* Create password form end */}
               
                </div>
                
            </>
        )
    }


}
export default CreatepassForm; 