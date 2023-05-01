import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';



const Header = () => {
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


        </Container >


    );
};

export default Header;