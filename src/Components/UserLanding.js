import React, {Component} from 'react';
import {Container, Row, Col, Form, Input, FormGroup} from 'reactstrap';

class UserLanding extends Component{
    render (){
        return (
            <Container className='login-container'>
                <Row>
                    <Col md='6' className='login-form-1'>
                        <h3>Sign Up</h3>
                        <Form>
                            <FormGroup>
                                <Input type="text" className="form-control" placeholder="Your Name *" value="" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" className="form-control" placeholder="Username *" value="" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" class="form-control" placeholder="Your Password *" value="" />
                            </FormGroup>
                            <FormGroup>
                                <input type="submit" class="btnSubmit" value="Sign Up" />
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col md='6' className='login-form-2'>
                        <h3>Login</h3>
                        <Form>
                            <FormGroup>
                                <Input type="text" className="form-control" placeholder="Username *" value="" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" class="form-control" placeholder="Password *" value="" />
                            </FormGroup>
                            <FormGroup>
                                <input type="submit" class="btnSubmit" value="Login" />
                            </FormGroup>
                            <FormGroup>
                                <a href="/" class="ForgetPwd">Forget Password?</a>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UserLanding;

