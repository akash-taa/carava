
import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { Space, Button } from 'antd';
import './Login.css';
import { Carousel } from 'antd';
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ForgetpassForm from './ForgetpassForm';
import CreatepassForm from './CreatepassForm';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Checkbox,
  AutoComplete,
} from 'antd';



class Login extends React.Component {
    

    render ()
    {
        return (
            <>
            <Layout style={{ minHeight: '100vh' }}>
             <Row>
                <Col style={{ minHeight: '100vh' }} className="login-left" span={12} xs={24} lg={12} xl={12} >
                {/* <LoginForm/> */}
                <SignupForm/>
                {/* <ForgetpassForm/>
                <CreatepassForm/> */}
                </Col>
                <Col style={{ minHeight: '100vh' }} className="login-right" span={12} xs={24} sm={24} lg={12} xl={12}  >
                <div className="login-right-details">
                
                <Carousel className="loginpage-caro" autoplay>
                    <div className="caro-div">
                        <h1>Our Commitment to Quality</h1>
                        <div className="ca-divider"></div>
                        <p>Carava has strict quality, sourcing and sustainability standards for all the products we supply our customers.</p>
                    </div>
                    <div className="caro-div">
                        <h1>Our Commitment to Quality</h1>
                        <div className="ca-divider"></div>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="caro-div">
                        <h1>Our Commitment to Quality</h1>
                        <div className="ca-divider"></div>
                        <p>Carava has strict quality, sourcing and sustainability standards for all the products we supply our customers.</p>
                    </div>
                    <div className="caro-div">
                        <h1>Our Commitment to Quality</h1>
                        <div className="ca-divider"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </Carousel>
               </div>
                </Col>
             </Row>
            </Layout>
            </>
        )
    }


}
export default Login; 