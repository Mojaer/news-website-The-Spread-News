import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import NavigationBar from '../../../Shared/NavigationBar/NavigationBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../../../AuthProvider/AuthProvider';
import useTitle from '../../../../useTitle/useTitle';


const Login = () => {
    const { login } = useContext(authContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';
    console.log(from)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .catch((error) => alert(error.message))
        navigate(from)

    }

    useTitle('login')
    return (
        <Container >
            <NavigationBar></NavigationBar>
            <div className='w-50 mx-auto'>
                <h4>Please login</h4>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' autoComplete="off" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' autoComplete="off" />
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