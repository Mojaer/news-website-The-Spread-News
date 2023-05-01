import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { authContext } from '../../../AuthProvider/AuthProvider';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const user = useContext(authContext)
    return (
        <Container className='my-2'>
            <Navbar bg="none" variant="none">

                <Nav className="mx-auto">
                    <Nav><Link to='/category/0'>Home</Link> </Nav>
                    <Nav><Link to='/category/0'> About</Link> </Nav>
                    <Nav><Link to='/category/0'> Career</Link> </Nav>
                </Nav>
                <FaUserCircle className='fs-2 me-2'></FaUserCircle>
                {user ? <Link className='btn btn-secondary' to='/'> Log out</Link>
                    : <Link className='btn btn-secondary' to='/login'> Login</Link>}
            </Navbar>
        </Container >
    );
};

export default NavigationBar;