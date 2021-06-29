import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import loginIcon from '../images/user.svg'
import uiImg from '../images/login.svg';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import Navigation from "./Navigation";
import {Link } from "react-router-dom";
import './Login.css';


const Login = () => {
    const [values, setValues] = React.useState(
        {
            email: "",
            password: "",            
            showPassword: false,
        }
    );

    const handleClickShowPassword = () => {
        setValues(
            { 
                ...values, showPassword: !values.showPassword 
            }
        );
      };
      
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues(
            {
             ...values, [prop]: event.target.value 
            }
        );
    };

    return (
        
        <div>
            <Navigation Tabchange="Sign in as user" url="/login"/>
            <Container className="mt-5">
                <Row>
                    
                    <div className="w-50 bg-white-70 center br4">
                        <h1> Sign in as Hospital</h1> 
                        <Col lg={4} md={6} sm={12} className="mt-5 p-3">
                            <img className="icon-img mt1" src={loginIcon} alt="icon"/>
                            <Form>
                                <Input
                                    placeholder ="Email"
                                    className ="ph3 br4 pv3"
                                    type= {"email"}
                                   
                                    onChange={handlePasswordChange("email")}
                                    value={values.email}
                                  
                                />
                                <br />
                             
                                <Input
                                    placeholder ="Password"
                                    className ="ph3 br4 pv3"
                                    type={values.showPassword ? "text" : "password"}
                                    onChange={handlePasswordChange("password")}
                                    value={values.password}
                                   
                                />
                                <br />
                                
                                <strong>
                                    View Password
                                </strong>
                                <IconButton
                                    className="grow"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword} 
                                >
                                    
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                                
                                <br />
                                
                                <h4 className="ma0 grow ">Forgot Password? <a className="dim link" href="#0">Click Here</a></h4>
                                
                                <Row>
                                    <Link to={"/hospitalregister"}>
                                        <Button 
                                            variant="pa2 mv3 mr4 br-pill w-30 b" 
                                            className ="backy f5 grow"
                                            type="submit"
                                        >Sign up</Button>
                                    </Link>
                                    
                                    <Button 
                                        variant=" grow pa2 mv3 br-pill w-30  b" 
                                        type="submit"
                                        className ="bg-white black-90 f5"
                                    >Sign in</Button> 
                                </Row>
                              
                            </Form>
                        </Col>
                    </div>
                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100" src={uiImg} alt=""/>
                    </Col>
                </Row>
            </Container>
            
        </div>


    );
};

export default Login;
