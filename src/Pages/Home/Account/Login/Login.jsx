import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import NavigationBar from '../../../Shared/NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <Container >
            <NavigationBar></NavigationBar>
            <div className='w-50 mx-auto'>
                <h4>Please login</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br></br>
                    <Form.Text className="text-muted">
                        Do not have an account <Link to='/register'>Register</Link>
                    </Form.Text>
                </Form>
            </div>

        </Container>
    );
};

export default Login;