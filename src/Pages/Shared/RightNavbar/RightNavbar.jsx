import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Qzone from '../QZone/Qzone';

const RightNavbar = () => {
    return (
        <div>
            <div >
                <h5>Login With</h5>
                <Button className='w-100 mb-2' variant="outline-info"><FaGoogle /> Login with Google</Button>
                <Button className='w-100 mb-5' variant="outline-dark"><FaGithub /> Login with GitHub</Button>
            </div>
            <div className='mb-5'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='bg-secondary my-2 py-3'>
                <h5>Q-Zone</h5>
                <Qzone></Qzone>

            </div>

        </div>
    );
};

export default RightNavbar;