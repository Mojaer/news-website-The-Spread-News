import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { FaUserCircle } from 'react-icons/fa';
import { authContext } from '../../../AuthProvider/AuthProvider';


const Header = () => {

    const user = useContext(authContext)
    console.log(user)
    return (

        <Container className='pt-4 my-3'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format('dddd, MMMM D, YYYY')}</p>

            </div>
            <div className='d-flex bg-light'>
                <Button variant="danger rounded-0">Latest</Button>
                <Marquee speed={100} >
                    <p className='text-danger mb-auto'>
                        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </p>

                </Marquee>
            </div>
            <Navbar bg="none" variant="none">

                <Nav className="mx-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Career</Nav.Link>
                </Nav>
                <FaUserCircle className='fs-2 me-2'></FaUserCircle>
                <Button variant="dark"> Login</Button>

            </Navbar>

        </Container >


    );
};

export default Header;