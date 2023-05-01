import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import NavigationBar from '../../../Shared/NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../../../AuthProvider/AuthProvider';

const Register = () => {
    const { register } = useContext(authContext)

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        register(email, password)
            .catch(error => { alert(error) });

    }

    return (
        <Container >
            <NavigationBar></NavigationBar>
            <div className='w-50 mx-auto'>
                <h4>Please login</h4>
                <Form onSubmit={handleRegistration}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your name </Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" name='name' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" placeholder="Enter Photo Url" name='Url' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label='terms and condition' />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <br></br>
                    <Form.Text className="text-muted">
                        Already have an account <Link to='/login'>Login</Link>
                    </Form.Text>
                </Form>
            </div>

        </Container>
    );
};

export default Register;