
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



class SignupForm extends React.Component {
    

    render ()
    {
        return (
            <>
            <div className="login-left-details">
                <img className="log-logo"
                  src={require("../../assets/images/logo.png").default}
                  />
                <h2 className="all-form-heading">Get Started</h2>
                <p className="log-sign-form-desc">Already have an account?<a> Log In</a></p>
                {/* Signup form */}
                <Form
                className="all-form signup-form"
                layout="vertical"
                > 
                 <Form.Item name={['user', 'name']} label="Your Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
                    <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                            ]}
                    >
                    <Input placeholder="Email"/>
                    </Form.Item>
                    <Form.Item
                    label="Create Password"
                                name="password"
                                
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                ]}
                                hasFeedback
                    >
                   
                    <Input.Password placeholder="Password"/>
                    </Form.Item>
                    <Form.Item
        name="agreement"
        valuePropName="checked"
      
      >
        <Checkbox>
        By signing up you agree to our <a href="">Privacy Policy</a> and <a href="">Terms of Service</a>
        </Checkbox>
      </Form.Item>
                    <Form.Item>
                        <Button className="submit" type="primary" htmlType="submit"> Sign Up</Button>
                    </Form.Item>
                </Form>
               
                {/* signup form end */}
               
                </div>
                
            </>
        )
    }


}
export default SignupForm; 