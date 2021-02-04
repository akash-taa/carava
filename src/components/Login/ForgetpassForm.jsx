
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



class ForgetpassForm extends React.Component {
    

    render ()
    {
        return (
            <>
            <div className="login-left-details">
                {/* <img className="log-logo"
                  src={require("../../assets/images/logo.png").default}
                  /> */}
                <h2 className="all-form-heading">Forgot Password?</h2>
                <p className="log-sign-form-desc">Enter your registered email below to receive<br/> password reset link.</p>
                {/*forget password form */}
                <Form
                className="all-form forgetpass-form"
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
                    <Input placeholder="Email"/>
                    </Form.Item>
                  
                    <Form.Item>
                        <Button className="submit" type="primary" htmlType="submit"> Sign Up</Button>
                    </Form.Item>
                </Form>
               
                {/* forget password form end */}
                <a>Send</a>
                </div>
                
            </>
        )
    }


}
export default ForgetpassForm; 