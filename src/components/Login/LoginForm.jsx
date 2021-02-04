
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



class LoginForm extends React.Component {
    

    render ()
    {
        return (
            <>
            <div className="login-left-details">
                <img className="log-logo"
                  src={require("../../assets/images/logo.png").default}
                  />
                <h2 className="all-form-heading">Welcome Back!</h2>
                <p className="log-sign-form-desc">Don't have an account?<a>Sign Up</a></p>
                {/* login form */}
                <Form
                className="all-form login-form"
                layout="vertical"
                >
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
                    {/* <p className="cform-label">Email Address</p> */}
                    <Input placeholder="Email"/>
                    </Form.Item>
                    <Form.Item
                    label="Password"
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
                    <Form.Item>
                        <Button className="submit" type="primary" htmlType="submit"> Sign In</Button>
                    </Form.Item>
                </Form>
               
                {/* /lofin form end */}
                <a className="forget-pass-link">Forget Password?</a>
                </div>
                
            </>
        )
    }


}
export default LoginForm; 